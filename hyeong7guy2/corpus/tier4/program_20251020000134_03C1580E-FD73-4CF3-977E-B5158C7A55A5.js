function f1(a2) {
    const v4 = new ArrayBuffer();
    new DataView(v4, 4294967296);
    return v4;
}
try { f1(); } catch (e) {}
