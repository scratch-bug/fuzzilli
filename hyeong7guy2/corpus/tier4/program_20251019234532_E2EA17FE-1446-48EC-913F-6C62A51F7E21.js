function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function* f6(a7, a8, a9) {
        return a7;
    }
    f6(a4, F0, F0);
    const v11 = f6(a3, a4, a5);
    for (let v12 = 0; v12 < 5; v12++) {
        v11["p" + v12] = v12;
    }
    %OptimizeMaglevOnNextCall(f6);
    f6(a4, a3, F0);
}
new F0();
