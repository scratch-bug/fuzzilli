function f1(a2) {
    return true;
}
for (let i5 = 0, i6 = 10; i6; i6--) {
}
Int8Array.toString = f1;
function f15() {
    function f16() {
        return Intl;
    }
    const v19 = ({ construct: f16 }).construct();
    const v20 = v19.NumberFormat;
    v20.useGrouping = Int8Array;
    v20(v19, v20);
    return true;
}
Uint32Array[Symbol.toPrimitive] = f15;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
