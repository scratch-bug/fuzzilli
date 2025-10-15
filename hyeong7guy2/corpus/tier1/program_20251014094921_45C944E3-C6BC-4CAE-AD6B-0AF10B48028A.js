const v1 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v2 = class {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return a8;
            }
            function f19(a20) {
                const v25 = {
                    set b(a22) {
                    },
                    [Symbol]() {
                    },
                    next() {
                        return a20;
                    },
                };
                function f26(a27, a28, a29, a30) {
                    [DataView,v1,v2,f26];
                    return v2;
                }
                class C33 {
                    static get d() {
                    }
                }
                return a6;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        function f36(a37, a38, a39) {
            const v46 = {
                set f(a41) {
                    const t0 = [this];
                    t0.__proto__ = a38;
                },
                valueOf(a44, a45) {
                    return a39;
                },
            };
            return v1;
        }
        const v47 = f36();
        f36(f36(-1, a5, a10), v47, v2);
        f36(Symbol, a5, F3);
        return a5;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v52 = new F3(Symbol, Symbol);
const v53 = new F3(F3, v52);
new F3(v1, v53);
