const v1 = new Set();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function* f8(a9, a10, a11) {
        return a10;
    }
    f8(a5, Set, this);
    const v13 = v1.add();
    v13.symmetricDifference(v13);
    f8(v1, a5, F2);
    %OptimizeMaglevOnNextCall(f8);
    f8();
}
new F2(v1, v1, F2, v1);
