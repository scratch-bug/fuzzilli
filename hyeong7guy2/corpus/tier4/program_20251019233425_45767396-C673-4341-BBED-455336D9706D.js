function f1(a2) {
    const v4 = new ArrayBuffer();
    new DataView(v4, -268435456);
    return ArrayBuffer;
}
try { f1(f1); } catch (e) {}
