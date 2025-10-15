function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F2(); } catch (e) {}
    this[5] += 231;
    Int32Array **= 231;
}
new F2();
new F2();
