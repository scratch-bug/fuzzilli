function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10) {
        return Float64Array;
    }
    this[Symbol.toPrimitive] = f8;
}
const v12 = new F2();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F13();
v17.length = v12;
const v18 = [v17];
v18.parameters = v17;
const v20 = WebAssembly.Tag;
try { new v20(v18); } catch (e) {}
