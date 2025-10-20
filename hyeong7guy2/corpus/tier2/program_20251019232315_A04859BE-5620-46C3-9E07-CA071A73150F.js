function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[4];
            v7 | 7;
            for (let v10 = 0; v10 < 5; v10++) {
                class C11 {
                    static o(a13, a14, a15) {
                        [] = a14;
                    }
                }
                try { C11.o(v7); } catch (e) {}
            }
            return 7;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
}
