const v3 = new Uint32Array(183);
const v5 = new Set();
Object.defineProperty(v5, "toJSON", { enumerable: true, value: v3 });
const v6 = class {
}
const v7 = new v6();
function f8() {
    return v5;
}
Object.defineProperty(v7, "toJSON", { configurable: true, enumerable: true, get: f8 });
const v12 = [JSON.stringify(v7, 129, 183),f8];
Reflect.apply(JSON.parse, v6, v12);
