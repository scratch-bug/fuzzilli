function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [];
        async function f9() {
            await v8;
        }
        f9();
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f19() {
            }
            function f20(a21) {
                const v26 = {
                    [a3]() {
                    },
                    next() {
                    },
                    next() {
                    },
                    [a21]() {
                    },
                };
                async function* f27(a28, a29, a30, a31) {
                    return f27;
                }
                f27();
                class C33 {
                    static get d() {
                    }
                }
                function f35() {
                }
                function f36() {
                }
                function f37(a38) {
                }
                Object.defineProperty(f35, Symbol, { configurable: true, enumerable: true, get: f36, set: f37 });
            }
            Object.defineProperty(this, "e", { get: f19, set: f20 });
            this.e = -1;
            class C41 extends WeakMap {
                #m(a43, a44) {
                }
                set f(a46) {
                }
            }
            class C47 extends C41 {
                n(a49, a50) {
                }
            }
        }
        new F13();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
