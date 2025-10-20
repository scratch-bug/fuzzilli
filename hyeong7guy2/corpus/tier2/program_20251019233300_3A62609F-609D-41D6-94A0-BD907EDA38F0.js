function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v12 = new Int16Array();
                const v13 = v12.length;
                const v14 = { millisecond: v13 };
                function f15(a16, a17) {
                    f15();
                    return a16;
                }
                v13 | v13;
            }
            f9();
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v21 = new F4();
    class C22 {
        static [v21](a24, a25, a26) {
        }
    }
}
const v27 = new F0();
const t28 = v27.constructor;
new t28();
