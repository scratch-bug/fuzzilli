Object.defineProperty(Uint16Array, "c", { configurable: true, value: Int32Array });
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a8, "c", { writable: true, configurable: true, value: 127 });
}
new F3(F3, Int32Array, Uint16Array, Uint16Array);
