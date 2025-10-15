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
            function f19() {
                return F4;
            }
            function f20(a21) {
                const v27 = {
                    [a7]() {
                    },
                    next() {
                        return -1;
                    },
                    next() {
                        return v1;
                    },
                    [a21]() {
                    },
                };
                async function* f28(a29, a30, a31, a32) {
                    return a30;
                }
                f28(1, v1, 1, v3);
                class C34 {
                    static get d() {
                    }
                }
            }
            const v38 = new Int16Array();
            v38.copyWithin(512, -1);
            class C40 {
            }
            Object.defineProperty(this, "e", { get: f19, set: f20 });
            this.e = -1;
            class C42 extends WeakMap {
                #m(a44, a45) {
                }
                set f(a47) {
                }
            }
            let v48 = new C42();
            class C49 extends C42 {
                n(a51, a52) {
                    v48++;
                }
            }
        }
        new F13(a11, f0, v3);
        return f8;
    }
    f8(a7, f0, this);
    %OptimizeFunctionOnNextCall(f8);
}
new F4(f0, F4);
new F4();
new F4();
