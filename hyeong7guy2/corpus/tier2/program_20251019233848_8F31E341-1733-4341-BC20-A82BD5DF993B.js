function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v13 = Array(2937);
                function f14(a15, a16) {
                    return f8(v13);
                }
                return 2937;
            }
            f9(a3);
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        f8.call(a6, F0, a3, a6, this);
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v20 = new F4(a2, a3);
    class C21 {
        static [v20](a23, a24, a25) {
        }
    }
}
new F0();
