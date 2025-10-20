const v0 = [];
class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a4;
            }
            function f17(a18) {
                const v20 = Temporal.PlainDateTime;
                try { v20(); } catch (e) {}
                for (let v22 = 0; v22 < 5; v22++) {
                    const v24 = {
                        get g() {
                            return this;
                        },
                    };
                }
                return a9;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
        }
        ("object").localeCompare("object", "object", C1);
        function F27(a29, a30) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v31 = new F27();
        let v32 = 0;
        for (let v33 = 0; v33 < 5; v33++) {
            v0["p" + v33] = v33;
        }
        v32++;
        function F37(a39, a40) {
            if (!new.target) { throw 'must be called with new'; }
            eval(v31);
        }
        const v43 = new F10();
        v43.e = v43;
        return a5;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(F2, C1);
new F2();
new F2();
