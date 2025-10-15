function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [this];
        async function f9() {
            await v8;
            return v8;
        }
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return a15;
            }
            function f19(a20) {
                const v24 = {
                    [a3]() {
                    },
                    next() {
                        return a16;
                    },
                    [a20]() {
                    },
                };
                async function* f25(a26, a27, a28, a29) {
                    return this;
                }
                f25(v24, a3);
                class C31 {
                    static get d() {
                    }
                }
                return this;
            }
            class C33 {
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
            class C35 extends WeakMap {
                #m(a37, a38) {
                }
                set f(a40) {
                }
            }
            class C41 extends C35 {
                n(a43, a44) {
                }
            }
            const v45 = [-1.3627030661649108e+307,680473.7032090442,257.625992409535,-0.895760134841046,0.19987537436654312];
            class C46 {
                static [v45](a48) {
                }
                static d = f18;
            }
            const v49 = class extends f18 {
                p(a51, a52) {
                }
            }
        }
        const v53 = new F12();
        return v53;
    }
    f4(a3, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v55 = new F0();
new F0(F0, v55);
new F0();
