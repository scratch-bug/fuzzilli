class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
            }
            function f17(a18) {
                const v21 = {
                    [a4]() {
                    },
                    next() {
                        return this;
                    },
                };
                return this;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
            for (let i = 0; i < 5; i++) {
                C0 = a4;
            }
            class C23 extends WeakMap {
                #m(a25, a26) {
                }
                set f(a28) {
                }
            }
            class C29 extends C23 {
                valueOf(a31, a32) {
                }
            }
            const v33 = [-1.3627030661649108e+307,680473.7032090442,257.625992409535,-0.895760134841046,0.19987537436654312];
            class C34 {
                static [v33](a36) {
                }
                static get d() {
                }
            }
            const v38 = class extends f16 {
                p(a40, a41) {
                }
            }
        }
        new F10(a6, this, C0, C0);
        return f5;
    }
    f5(F1, this, C0);
    %OptimizeFunctionOnNextCall(f5);
}
const v44 = new F1();
new F1(F1, v44);
new F1(v44, C0);
