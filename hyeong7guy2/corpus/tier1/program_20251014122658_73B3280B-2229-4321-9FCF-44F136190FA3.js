const v1 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v2 = class {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f19() {
                function f20() {
                    Error();
                    return { done: true };
                }
                return { next: f20 };
            }
            const v26 = Symbol.iterator;
            Date.bind(null, ...{ [v26]: f19 });
            function f30() {
                return a8;
            }
            function f31(a32) {
                const v37 = {
                    set b(a34) {
                    },
                    [Symbol]() {
                    },
                    next() {
                        return null;
                    },
                };
                function f38(a39, a40, a41, a42) {
                    [DataView,v1,v2,f38];
                    return v37;
                }
                class C45 {
                    static get d() {
                    }
                }
                function f47() {
                    return f47;
                }
                return a8;
            }
            Object.defineProperty(this, "e", { get: f30, set: f31 });
            this.e = -1;
        }
        const v48 = new F12(a5, a10, Symbol, this);
        function f49(a50, a51, a52) {
            const v58 = {
                set f(a54) {
                },
                valueOf(a56, a57) {
                    return a5;
                },
            };
            return v1;
        }
        f49(F3, a10, f49(a6, f49(v2, v48, -1), v2));
        return f7;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
new F3(F3, Symbol);
new F3(v1, Symbol);
new F3(v2, F3);
