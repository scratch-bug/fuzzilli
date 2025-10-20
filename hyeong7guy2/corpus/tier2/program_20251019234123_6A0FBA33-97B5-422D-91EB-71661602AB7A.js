Int8Array--;
function f4() {
    function f5() {
        return Intl;
    }
    const v8 = ({ construct: f5 }).construct(f4);
    const v9 = v8.NumberFormat;
    v9.useGrouping = Int8Array;
    v9(v8, v9).resolvedOptions();
    return v8;
}
Uint32Array[Symbol.toPrimitive] = f4;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
