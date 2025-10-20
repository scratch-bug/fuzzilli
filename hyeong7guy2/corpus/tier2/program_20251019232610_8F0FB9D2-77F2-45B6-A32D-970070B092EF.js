class C0 {
}
const v1 = [C0];
const v5 = new Uint32Array();
v5.toJSON = v1;
const v7 = new Set();
Object.defineProperty(v7, "toJSON", { enumerable: true, value: v5 });
const v8 = class {
}
const v9 = new v8();
function f10() {
    return v7;
}
Object.defineProperty(v9, "toJSON", { configurable: true, enumerable: true, get: f10 });
const v14 = [JSON.stringify(v9, 129, 183),f10];
Reflect.apply(JSON.parse, v8, v14);
