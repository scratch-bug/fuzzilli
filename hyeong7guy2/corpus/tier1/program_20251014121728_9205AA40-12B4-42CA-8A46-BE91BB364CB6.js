const v0 = class {
}
const v3 = class {
}
function f4() {
    const v5 = [3];
    v5[2147483647] = v0;
    v5.length = 3;
    return v0;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
