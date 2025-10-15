const v1 = class {
}
const v2 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v3 = class {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f19() {
                return a9;
            }
            function f20(a21) {
                const v24 = {
                    set b(a23) {
                    },
                };
                function f25(a26, a27, a28, a29) {
                    return [DataView,v2,v3,f25];
                }
                function F32(a34, a35, a36, a37) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F32(v1, 7, f19);
                class C39 {
                    get c() {
                    }
                    static #valueOf(a42, a43) {
                    }
                    static get d() {
                    }
                }
                return a18;
            }
            Object.defineProperty(this, "e", { get: f19, set: f20 });
            this.e = -1;
        }
        new F13();
        function f46(a47, a48, a49) {
            const v55 = {
                set f(a51) {
                    this.__proto__ = a48;
                },
                valueOf(a53, a54) {
                    return a10;
                },
            };
            return v2;
        }
        f46(a10, F4, f46());
        f46(7, this, a6);
        f46();
        return f8;
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
const v61 = new F4();
const v62 = new F4(v61, v61);
new F4(v62, v1);
