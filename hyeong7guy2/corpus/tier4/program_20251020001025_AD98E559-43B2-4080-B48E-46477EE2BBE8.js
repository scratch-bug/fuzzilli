function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a17;
            }
            const v20 = new F15(Uint32Array);
            v20.e;
        }
        const v22 = new F8();
        return v22;
    }
    f4(F0, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
