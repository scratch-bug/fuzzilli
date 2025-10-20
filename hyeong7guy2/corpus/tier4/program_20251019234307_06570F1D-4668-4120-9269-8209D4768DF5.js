class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Intl.supportedValuesOf("collation");
    const v8 = C0.constructor;
    try { v8(v7, v8); } catch (e) {}
}
new F1();
