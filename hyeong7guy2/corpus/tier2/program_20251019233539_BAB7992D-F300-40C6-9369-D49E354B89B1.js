function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                a10 >>> a10;
                const v13 = [];
                v13[11] = Infinity;
                const v14 = v13[4];
                v14 ?? v14;
                Math.asinh(v14);
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F4();
    class C19 {
        static [v18](a21, a22, a23) {
        }
        static [v18](a25, a26, a27) {
        }
    }
}
new F0();
