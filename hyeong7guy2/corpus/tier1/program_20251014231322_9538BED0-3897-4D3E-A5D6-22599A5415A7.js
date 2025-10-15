function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v10 = new Uint8ClampedArray(16);
        v10[1] = v10;
        return f4;
    }
    const t7 = f4();
    t7();
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
new F0();
