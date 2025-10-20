function f1(a2) {
    const v4 = new ArrayBuffer(a2);
    v4.slice();
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f1 });
    new DataView(v4, DataView);
    return Symbol;
}
try { f1(); } catch (e) {}
