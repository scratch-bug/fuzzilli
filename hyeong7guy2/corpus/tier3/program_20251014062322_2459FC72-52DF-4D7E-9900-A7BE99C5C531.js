const v1 = Symbol.toPrimitive;
const v4 = Intl.DateTimeFormat;
const v5 = v4(v4);
let v6;
try { v6 = v5.formatRangeToParts(256, v1); } catch (e) {}
function f8() {
    return Intl;
}
WebAssembly.instantiateStreaming(v4, v1, v6).catch(f8);
