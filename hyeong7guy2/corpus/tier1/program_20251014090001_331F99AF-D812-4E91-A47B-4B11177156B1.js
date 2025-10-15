function f0() {
    return f0;
}
const v1 = class {
}
[-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v3 = class {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            Temporal.year = Temporal;
            function f20(a21) {
                const v27 = {
                    [a7]() {
                    },
                    next() {
                        return -1;
                    },
                    next() {
                        return f8;
                    },
                    [a21]() {
                    },
                };
                async function* f28(a29, a30, a31, a32) {
                    return f8;
                }
                f28(1, v1);
                class C34 {
                    static get d() {
                    }
                }
                return f28;
            }
            class C36 {
            }
            Object.defineProperty(this, "e", { configurable: true, enumerable: true, get: a18, set: f20 });
            this.e = -1;
            class C38 extends WeakMap {
                #m(a40, a41) {
                }
                set f(a43) {
                }
            }
            let v44 = new C38();
            class C45 extends a10 {
                n(a47, a48) {
                    v44--;
                }
            }
        }
        new F13(a11, f0, v3);
        return this;
    }
    f8(a7, f0);
    %OptimizeFunctionOnNextCall(f8);
}
const v52 = new F4(f0, F4);
const v53 = new F4();
new F4(v53, v52);
