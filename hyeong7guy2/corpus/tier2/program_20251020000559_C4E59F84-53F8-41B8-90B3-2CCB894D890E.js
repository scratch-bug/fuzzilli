function f2() {
    function f3() {
        return Intl;
    }
    const v6 = ({ construct: f3 }).construct();
    const v7 = v6.NumberFormat;
    v7.maximumFractionDigits = f3;
    v7(v6, v7);
    return v6;
}
Uint32Array[Symbol.toPrimitive] = f2;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
