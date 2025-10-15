function f0(a1) {
    return a1;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a6, "length", { configurable: true, enumerable: true, value: this });
}
new F2(F2, f0, f0);
