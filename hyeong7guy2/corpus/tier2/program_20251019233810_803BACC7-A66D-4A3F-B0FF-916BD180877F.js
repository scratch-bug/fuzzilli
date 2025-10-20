const v2 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
const v4 = {
    done: false,
    maxByteLength: -1024,
    arguments: v2,
    toString() {
        return -1024;
    },
    execution: v2,
};
const v6 = {};
function f7() {
    return false;
}
Object.defineProperty(v6, "getOwnPropertyDescriptor", { configurable: true, enumerable: true, get: f7, set: f7 });
const v8 = JSON.stringify(v4);
const v9 = JSON.parse;
v9.apply(JSON, [v8]);
