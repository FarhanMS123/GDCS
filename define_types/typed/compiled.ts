import literal from "./literal.json";
import query from "./query.json";

const l = {
    ...literal,
} as const;

const q = {
    ...query,
} as const;

type cv = Promise<typeof l>;
export default cv;