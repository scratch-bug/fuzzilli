function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                typeof c;
                const v15 = Array(2937);
                function f16(a17, a18) {
                    f8(v15);
                    return this;
                }
            }
            f9();
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        f8.call();
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v22 = new F4(this, F4);
    class C23 {
        static [v22](a25, a26, a27) {
        }
    }
}
new F0(F0, F0);
