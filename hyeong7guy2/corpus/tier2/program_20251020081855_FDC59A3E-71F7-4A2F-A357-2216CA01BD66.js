Int8Array--;
function f5() {
    function f6() {
        return Intl;
    }
    const v9 = ({ construct: f6 }).construct();
    const v10 = v9.NumberFormat;
    v10.useGrouping = Int8Array;
    v10(v9, v10).formatRange(4096, 4096);
    return 4096;
}
Uint32Array[Symbol.toPrimitive] = f5;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
