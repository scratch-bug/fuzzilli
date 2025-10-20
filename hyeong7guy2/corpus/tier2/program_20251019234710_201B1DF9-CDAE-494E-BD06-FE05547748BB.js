function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[4];
            v7 | 7;
            const v11 = { a: 1.1 };
            for (let v12 = 0; v12 < 5; v12++) {
                function f13(a14, a15, a16, a17) {
                    function f18(a19, a20, a21) {
                        return a20;
                    }
                    return f18(v12);
                }
                v12.a;
                v7 - v11;
            }
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0(F0, F0);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
