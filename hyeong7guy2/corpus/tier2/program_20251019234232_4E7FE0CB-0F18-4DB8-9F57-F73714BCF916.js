const v2 = { maxByteLength: 1073741824 };
const v4 = new ArrayBuffer(2, v2);
const v6 = new Float32Array(v4);
function f8() {
    return Float32Array;
}
function f9() {
    function f10(a11) {
        Temporal.PlainDate.apply(v6, v6);
        return v2;
    }
    return f10;
}
function f15(a16) {
    return v2;
}
Object.defineProperty(f8, Symbol.iterator, { configurable: true, enumerable: true, get: f9, set: f15 });
try { new Uint16Array(f8); } catch (e) {}
