function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        let v14 = 1.1;
                        v14++;
                        const v16 = { a: v14 };
                    }
                    f12();
                    %OptimizeMaglevOnNextCall(f12);
                    return f12;
                }
                f11();
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v19 = new F7();
            gc();
            class C22 {
                static [v19](a24, a25, a26) {
                }
            }
            return a3;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
