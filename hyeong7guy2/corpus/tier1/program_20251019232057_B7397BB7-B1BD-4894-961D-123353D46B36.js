function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        for (let i7 = 0;
            (() => {
                const v9 = i7 < 20000;
                d = v9;
                return v9;
            })();
            i7++) {
        }
        function f13(a14) {
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19(a20, a21, a22) {
                    const v23 = { done: d };
                    return F0;
                }
                f19(this, f19, a17);
                %OptimizeFunctionOnNextCall(f19);
            }
            new F15();
            new F15();
            new F15(a14, F0);
        }
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
