function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f11() {
                return f8;
            }
            const v26 = {
                next: -9007199254740990,
                construct(a13, a14) {
                    function f15(a16, a17) {
                        class C19 extends Array {
                        }
                        v2 !== a16;
                        function F21(a23, a24) {
                            if (!new.target) { throw 'must be called with new'; }
                            return a16;
                        }
                        return a9;
                    }
                    a13.toString = f15;
                    a13.toString();
                    return f11;
                },
            };
            v26.construct(f11);
            -9007199254740990 >> a5;
            return a5;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v31 = new F3();
class C32 {
    static [v31](a34, a35, a36) {
    }
}
