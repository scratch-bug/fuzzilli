function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float64Array();
    Object.freeze(v7);
}
const v10 = new F0();
new F0(F0, v10, F0, F0);
