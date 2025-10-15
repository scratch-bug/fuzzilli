function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a6;
            }
            function f17(a18) {
                a18 & a18;
                const v22 = {
                    set b(a21) {
                    },
                };
                const v23 = [232656985,20082,-14,1141014574,268435440,1,1,257,268435456];
                const v25 = class extends Int16Array {
                }
                class C26 {
                    get c() {
                    }
                    static #valueOf(a29, a30) {
                    }
                    static get d() {
                    }
                }
                return v23;
            }
            f17(Set);
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10(-1, a4, F10, -1);
        function f34(a35, a36, a37) {
            const v40 = {
                set f(a39) {
                },
            };
            return Set;
        }
        f34(a3, a6, this);
        return f5;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v43 = new F1();
new F1(v43, Set);
new F1();
