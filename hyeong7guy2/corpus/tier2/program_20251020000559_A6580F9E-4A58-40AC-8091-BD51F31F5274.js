function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f10() {
                return -9007199254740990;
            }
            const v25 = {
                month: 4294967295,
                construct(a12, a13) {
                    function f14(a15, a16) {
                        class C18 extends Array {
                        }
                        "codePointAt" !== a15;
                        function F20(a22, a23) {
                            if (!new.target) { throw 'must be called with new'; }
                            return a15;
                        }
                        return f14;
                    }
                    a12.toString = f14;
                    a12.toString();
                    return this;
                },
            };
            v25.construct(f10);
            -9007199254740990 >> a4;
        }
        f7(f7);
        f7(4294967295);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v30 = new F2();
class C31 {
    static [v30](a33, a34, a35) {
    }
}
