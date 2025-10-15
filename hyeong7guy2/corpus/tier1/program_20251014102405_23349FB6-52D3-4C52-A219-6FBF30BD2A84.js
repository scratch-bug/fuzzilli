function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return 5.0;
            }
            class C17 {
            }
            const t10 = Array();
            t10[104] = 5.0;
            function F20(a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f26() {
                return f26;
            }
            WebAssembly.instantiateStreaming(F20).catch(f26);
            function f29(a30) {
                const v35 = {
                    [a4]() {
                    },
                    next() {
                        return this;
                    },
                    next() {
                        return this;
                    },
                    [a30]() {
                    },
                };
                async function* f36(a37, a38, a39, a40) {
                    return f36;
                }
                f36(v35, a4);
                for (let v42 = 0; v42 < 10; v42++) {
                    v42++;
                }
                class C44 {
                    static get d() {
                    }
                }
            }
            class C46 {
            }
            Object.defineProperty(this, "e", { get: f16, set: f29 });
            this.e = -1;
            class C48 extends WeakMap {
                #m(a50, a51) {
                }
            }
            class C52 extends C48 {
                n(a54, a55) {
                }
            }
        }
        new F10(a6, f5, a7, a3);
        return a6;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v58 = new F1(5.0, F1);
new F1(F1, v58);
new F1();
