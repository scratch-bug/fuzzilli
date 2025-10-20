function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v12 = new Int16Array();
                const v13 = v12.length;
                const v14 = {};
                function f16(a17) {
                    return f8;
                }
                const t12 = 64;
                t12[Symbol] = f16;
                v13 && v13;
                v13 | v13;
                return a3;
            }
            f9();
            f9(a2);
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v23 = new F4(F0, F0);
    class C24 {
        static [v23](a26, a27, a28) {
        }
    }
}
new F0();
