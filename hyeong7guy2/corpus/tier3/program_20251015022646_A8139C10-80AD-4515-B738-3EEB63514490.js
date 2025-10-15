const v1 = {};
const v3 = new Int16Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8() {
    function f9(a10, a11, a12) {
        return Int16Array;
    }
    return f9;
}
F4[Symbol.toPrimitive] = f8;
try { v3.fill(v1, F4); } catch (e) {}
