function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [this];
        async function f9() {
            await v8;
            return a3;
        }
        f9();
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f19() {
                return a6;
            }
            function f20(a21) {
                const v26 = {
                    [a3]() {
                    },
                    next() {
                        return f20;
                    },
                    next() {
                        return this;
                    },
                    [a21]() {
                    },
                };
                async function* f27(a28, a29, a30, a31) {
                    return f27;
                }
                f27(v26, a3, a2, -1);
                class C33 {
                    static get d() {
                    }
                }
                return a16;
            }
            class C35 {
            }
            Object.defineProperty(this, "e", { get: f19, set: f20 });
            this.e = -1;
            class C37 extends WeakMap {
                #m(a39, a40) {
                }
                set f(a42) {
                }
            }
            class C43 extends C37 {
                n(a45, a46) {
                }
            }
        }
        new F13();
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v49 = new F0(F0, F0);
new F0(F0, v49);
new F0();
