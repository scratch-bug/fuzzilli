function f1(a2, a3) {
    function f4(a5, a6) {
        return a3;
    }
    return f4;
}
Symbol.toString = f1;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            const v15 = `string${536870912n}undefined`;
            const v16 = Symbol.toString();
            v16.g = v16;
            v16(Symbol, f12, v16, v15);
            return f13;
        }
        f13(f13);
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v20 = new F8(536870912n, 536870912n);
v20.toString(F8, v20, 536870912n, F8, 536870912n);
