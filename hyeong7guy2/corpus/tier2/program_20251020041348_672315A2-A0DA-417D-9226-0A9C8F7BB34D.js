function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                function f13(a14) {
                    const v16 = [];
                    v16[11] = Infinity;
                    Math.asinh(v16[4]);
                }
                %OptimizeMaglevOnNextCall(f13);
                return f13;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v20 = new F8();
        class C21 {
            static [v20](a23, a24, a25) {
            }
            static [v20](a27, a28, a29) {
            }
        }
    }
    new F4();
}
new F0();
