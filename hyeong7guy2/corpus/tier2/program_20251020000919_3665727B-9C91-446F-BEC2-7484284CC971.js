const v1 = class extends Date {
}
const v2 = new v1();
function f4() {
    return v2;
}
Object.defineProperty(Float64Array, 1, { get: f4 });
const v5 = new Float64Array(Float64Array);
new Uint16Array(v5);
