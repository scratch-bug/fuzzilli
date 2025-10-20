function f1(a2) {
    const v4 = ArrayBuffer.constructor;
    let v5;
    try { v5 = v4(Symbol, ArrayBuffer); } catch (e) {}
    const v6 = new ArrayBuffer(v5, Symbol);
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f1 });
    const v9 = new DataView(v6, DataView, ArrayBuffer, v5);
    return v9;
}
try { f1(); } catch (e) {}
