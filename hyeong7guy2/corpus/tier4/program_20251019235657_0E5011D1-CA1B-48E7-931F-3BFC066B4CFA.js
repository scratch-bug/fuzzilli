function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new a4(2147483649);
    for (const v7 in v6) {
    }
}
try { new F2(Float32Array); } catch (e) {}
