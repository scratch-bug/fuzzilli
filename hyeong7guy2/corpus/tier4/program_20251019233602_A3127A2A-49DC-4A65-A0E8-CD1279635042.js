function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            try { Object.create(Float64Array, "valueOf"); } catch (e) {}
            ([0.3355499447371395]).fill(a10, a3, a6);
        }
        new F8();
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
