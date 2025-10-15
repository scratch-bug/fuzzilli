function f1() {
    const v2 = new Uint32Array();
    const v3 = v2.values();
    v3.drop(v3);
    return f1;
}
try { f1.apply(Uint32Array, f1); } catch (e) {}
