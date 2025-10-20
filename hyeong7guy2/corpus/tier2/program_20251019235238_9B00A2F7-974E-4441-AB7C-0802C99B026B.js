const v0 = {};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v22 = {
                construct(a10, a11) {
                    function f12(a13, a14) {
                        class C16 extends Array {
                        }
                        C16();
                        function F18(a20, a21) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                    }
                },
            };
        }
        f7(f6);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v24 = new F2();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
try { WeakMap(); } catch (e) {}
new WeakMap();
class C34 extends Uint32Array {
    set h(a36) {
        b = a36;
        const v38 = {};
        class C40 extends BigUint64Array {
        }
        function f41(a42, a43) {
        }
    }
    get d() {
    }
}
function f45() {
    {
    }
    function F46(a48, a49) {
        if (!new.target) { throw 'must be called with new'; }
        a49.c = a49;
        function f50() {
            function f51(a52, a53, a54, a55) {
                0 < 0;
            }
            function f59(a60) {
                function F61(a63, a64) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                if (false) {
                }
                ([-172818.14827725466,84926.95893945149,0.4893424997893261,-Infinity]).fill();
                const v68 = class {
                }
                function f69() {
                }
                Object.defineProperty(this, "e", { get: f69, set: f50 });
            }
            f59();
            f59();
        }
        Object.defineProperty(this, "toString", { get: f50 });
    }
    const v72 = new F46(F46, F46);
    class C73 {
        static [v72](a75, a76, a77) {
        }
    }
}
C34.constructor = f45;
const v78 = C34?.constructor;
try { new v78(); } catch (e) {}
function f80(a81) {
}
class C82 extends f80 {
    static set a(a84) {
    }
}
const v85 = class {
}
const v86 = class extends v85 {
}
gc();
Object.defineProperty(v86, 0, { writable: true, value: v85 });
const v90 = {};
