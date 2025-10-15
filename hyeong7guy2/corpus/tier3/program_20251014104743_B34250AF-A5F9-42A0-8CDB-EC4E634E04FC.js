function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = a7.constructor;
    try { v9.asUintN(); } catch (e) {}
}
new F3(Float32Array, true, 1102284067n);
