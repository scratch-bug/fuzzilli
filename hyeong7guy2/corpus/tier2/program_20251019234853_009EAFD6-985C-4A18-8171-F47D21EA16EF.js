const v3 = new Int32Array(9);
const t1 = [0.0,-2.2250738585072014e-308];
const v5 = delete t1[65535];
function f6(a7) {
    return v3;
}
Symbol[Symbol.species] = f6;
function f9() {
    return Int32Array;
}
function f10() {
    const v13 = { maxByteLength: 16 };
    const v15 = new ArrayBuffer(16, v13);
    const v17 = new Uint8Array(v15);
    Object.defineProperty(v17, "constructor", { writable: true, enumerable: true, value: Symbol });
    v17.slice(v13, v5);
}
function f19(a20) {
    return f6;
}
Object.defineProperty(f9, Symbol.iterator, { configurable: true, enumerable: true, get: f10, set: f19 });
new Uint16Array(f9);
