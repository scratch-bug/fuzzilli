function f1(a2, a3) {
    function f4(a5, a6) {
        for (let v7 = 0; v7 < 5; v7++) {
        }
        return a6;
    }
    return f4;
}
Symbol.toString = f1;
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            const v16 = `string${536870912n}undefined`;
            const t14 = Symbol.toString(F9, F9, f13);
            return t14(Symbol, f13, v16, v16);
        }
        f14(f14(Symbol));
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v21 = new F9(f1, F9);
v21.toString(Symbol, F9, F9);
