function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = a8.constructor;
    t2(1073741825);
}
new F4(Float32Array, true, 1102284067n);
