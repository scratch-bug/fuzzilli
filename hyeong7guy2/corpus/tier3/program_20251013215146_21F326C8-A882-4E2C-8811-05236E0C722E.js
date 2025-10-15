function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = a8.constructor;
    try { new v10(this, this, a9, a6); } catch (e) {}
}
const v12 = new F4(Float32Array, true, 1102284067n);
new F4(v12, 4, Float32Array);
