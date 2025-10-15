function f0(a1) {
    const v3 = new ArrayBuffer(a1, ArrayBuffer);
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f0 });
    new DataView(v3, DataView);
    return v3;
}
try { f0(f0); } catch (e) {}
