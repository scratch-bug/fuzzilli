const v0 = [-8137.1569509671535,1000.0,-7.141581529523404];
function f1() {
    return v0;
}
const v5 = new Uint32Array();
v5.toJSON = f1;
const v7 = new Set(v0);
Object.defineProperty(v7, "toJSON", { enumerable: true, value: v5 });
const v8 = class {
}
const v9 = new v8();
function f10() {
    return v7;
}
Object.defineProperty(v9, "toJSON", { configurable: true, enumerable: true, get: f10 });
const v14 = [JSON.stringify(v9, -38468, 183)];
Reflect.apply(JSON.parse, v8, v14);
