const v2 = Symbol.toPrimitive;
function f3() {
    function f4() {
        return Intl;
    }
    const v7 = ({ construct: f4 }).construct();
    const v8 = v7.NumberFormat;
    v8.compactDisplay = v2;
    v8(v7, v8);
    return f4;
}
Uint32Array[Symbol.toPrimitive] = f3;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
