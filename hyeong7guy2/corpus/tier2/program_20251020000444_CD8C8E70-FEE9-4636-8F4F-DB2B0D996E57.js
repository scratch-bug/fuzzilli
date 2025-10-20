function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            for (let v10 = 0; v10 < 5; v10++) {
                arguments[0] = arguments;
                const v17 = {
                    o(a14, a15, a16) {
                        return F0;
                    },
                    __proto__: null,
                };
            }
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0(F0, F0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
