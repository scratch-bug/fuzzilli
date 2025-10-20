const v1 = [4.0,-106267.0826778562,0.3156429924879882,1e-15];
function f3(a4) {
    return v1;
}
Int8Array.toString = f3;
function f6() {
    function f7() {
        return Intl;
    }
    const v10 = ({ construct: f7 }).construct();
    const v11 = v10.NumberFormat;
    v11.useGrouping = Int8Array;
    v11(v10, v11);
    return v1;
}
Uint32Array[Symbol.toPrimitive] = f6;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
