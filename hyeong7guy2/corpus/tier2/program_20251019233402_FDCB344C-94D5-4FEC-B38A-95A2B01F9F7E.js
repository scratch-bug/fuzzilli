function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v11 = a10 >>> a10;
                const v13 = [];
                v13[11] = Infinity;
                Math.asinh(v13[4]);
                return v11;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v17 = new F4();
    class C18 {
        static [v17](a20, a21, a22) {
        }
        static [v17](a24, a25, a26) {
        }
    }
}
new F0();
