function f0(a1) {
    const v3 = new ArrayBuffer(a1);
    v3.transfer();
    new DataView(v3);
    return v3;
}
try { f0(); } catch (e) {}
