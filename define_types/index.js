const path = require("path");
const fs = require("fs");
const { json } = require("stream/consumers");

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
    
    const literal = {};
    const query = {};
    const complex = {};

    for (const [k, v] of Object.entries(cv)) {
        const _type = typeof v;

        if (_type == "object") {
            const name = v.constructor?.name;

            if (name == Object.name || k.match(/(FS|asm)/)) {
                switch (k) {
                    case "preloadedImages":
                    case "preloadedAudios":
                        literal[k] = v;
                        break;
                    case "FS":
                    case "asm":
                    default:
                        literal[k] = {};
                }
            } else if (name == Promise.name) query[k] = [Promise.name, [], []]; // res, rej
            else if (name && name.match(/\dArray$/)) complex[k] = v;
            else literal[k] = v;
        } else if (_type == "function") {
            const params = getParamNames(v);
            query[k] = eval(`function(${params.join(",")}){}`); // args, ret
        } else {
            literal[k] = v;
        }
    }

    fs.writeFileSync(path.resolve(__dirname, "./typed/literal.json"), JSON.stringify(literal, null, 2));
    fs.writeFileSync(path.resolve(__dirname, "./typed/query.json"), JSON.stringify(query, null, 2));
    // fs.writeFileSync("./typed/complex.json", JSON.stringify(complex), null, 2);
})();