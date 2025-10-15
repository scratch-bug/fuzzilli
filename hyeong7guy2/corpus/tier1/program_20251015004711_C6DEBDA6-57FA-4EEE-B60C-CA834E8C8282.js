function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8() {
                return f5;
            }
            const v30 = {
                construct: f8,
                next: f4,
                a: -9007199254740990,
                construct(a10, a11) {
                    function f12(a13, a14) {
                        class C16 extends Array {
                        }
                        const v17 = new C16();
                        function F18(a20, a21) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f22() {
                                function f23(a24) {
                                    v17[1] **= Array;
                                    return a13;
                                }
                                f23(a21);
                                return f23;
                            }
                            Object.defineProperty(this, "toString", { get: f22 });
                        }
                        const v26 = new F18(f12);
                        return v26;
                    }
                    a10.toString = f12;
                    const t20 = a10.toString().toString;
                    t20();
                },
            };
            v30.construct(f8);
            const v32 = -9007199254740990 >> a2;
            new F0(v32, F0);
            return v32;
        }
        f5(this);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v36 = new F0();
class C37 {
    static [v36](a39, a40, a41) {
    }
}
