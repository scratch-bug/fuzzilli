const v3 = new Int32Array(9);
function f4(a5) {
    return v3;
}
Symbol[Symbol.species] = f4;
function f7() {
    return f4;
}
function f8() {
    const v10 = new Uint8Array(Uint8Array);
    Object.defineProperty(v10, "constructor", { writable: true, enumerable: true, value: Symbol });
    v10.slice();
}
function f12(a13) {
    return a13;
}
Object.defineProperty(f7, Symbol.iterator, { configurable: true, enumerable: true, get: f8, set: f12 });
new Uint16Array(f7);
