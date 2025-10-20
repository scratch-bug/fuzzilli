function f1() {
    function f2() {
        return Intl;
    }
    const v4 = { construct: f2 };
    const v5 = v4.construct(Uint32Array, v4, Uint32Array, v4);
    const v6 = v5.NumberFormat;
    v6.useGrouping = v6;
    v6(v5, v6);
    return f2;
}
Uint32Array[Symbol.toPrimitive] = f1;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
