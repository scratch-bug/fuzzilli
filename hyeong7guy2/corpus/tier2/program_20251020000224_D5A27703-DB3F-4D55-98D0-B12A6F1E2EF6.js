function f1(a2, a3) {
    Math.abs(-3);
    return Symbol;
}
Symbol.toString = f1;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            function f15() {
                for (let i17 = 0;
                    i17;
                    (() => {
                        ++i17;
                        const v20 = {};
                    })()) {
                }
                for (let v22 = 0; v22 < 5; v22++) {
                }
            }
            const v23 = f15();
            v23 >> v23;
            const v25 = `string${536870912n}undefined`;
            Symbol.toString();
            v25.normalize();
            return f1;
        }
        f13(Symbol);
        f13(F8);
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v30 = new F8(F8, f1);
v30.toString(v30, v30);
