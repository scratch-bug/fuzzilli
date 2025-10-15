const v0 = class {
}
function f1() {
    return v0;
}
const v3 = new SharedArrayBuffer(f1, v0);
Object.defineProperty(v3, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f1 });
try { v3.slice(v3); } catch (e) {}
