for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9(a10) {
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        function f15() {
            function f16(a17) {
                const v19 = [];
                v19[11] = Infinity;
                Math.asinh(v19[4]);
                return f9;
            }
            f16(this);
            f16();
            %OptimizeMaglevOnNextCall(f16);
            return f16;
        }
        Object.defineProperty(this, "toString", { get: f15 });
    }
    const v25 = new F11(a10, F11);
    v25.toString();
}
f9();
f9();
