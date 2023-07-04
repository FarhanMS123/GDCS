import path from "path";
import fs from "fs";
import { z } from 'zod';
import { zodToTs, createTypeAlias, printNode, withGetType } from 'zod-to-ts';

var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
    var fnStr = func.toString().replace(STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if(result === null)
        result = [];
    return result;
}


(async () => {
    const cv = await require("../build_wasm_contrib/bin/opencv.js");
    // const cv = {};
    
    const shape = {};

    for (const [k, v] of Object.entries(cv)) {
        const _type = typeof v;

        if (_type == "object") {
            const name = (v as object).constructor?.name;

            if (name == Object.name || k.match(/(FS|asm)/)) {
                switch (k) {
                    case "preloadedImages":
                    case "preloadedAudios":
                        shape[k] = z.record(z.unknown()).default(v as any);
                        break;
                    case "FS":
                    case "asm":
                    default:
                        shape[k] = z.record(z.unknown());
                }
            } else if (name == Promise.name) shape[k] = z.promise(z.unknown()); // res, rej
            else if (name && name.match(/\dArray$/)) shape[k] = withGetType(z.unknown(), (ts) => ts.factory.createIdentifier((v as object).constructor.name));
            else shape[k] = z.literal(v as any);
        } else if (_type == "function") {
            const params = getParamNames(v);
            const serialized = `(${ params.join(", ") }) => unknown`; // args, ret
            const func = withGetType(z.function(), (ts) => ts.factory.createIdentifier(serialized))
            shape[k] = func;
        } else if (_type == "undefined") shape[k] = z.undefined();
        else shape[k] = z.literal(v as any); // string | number | boolean
    }

    const CV = z.object({
        ...shape,
    });

    const id = "CV";
    const { node } = zodToTs(CV, id);
    const typeAlias = createTypeAlias(node, id);
    const printed = printNode(typeAlias);
    const full = `export ${printed}\n\nexport default ${id};`;

    fs.writeFileSync(path.resolve(__dirname, "./typed/opencv.d.ts"), full);
})();