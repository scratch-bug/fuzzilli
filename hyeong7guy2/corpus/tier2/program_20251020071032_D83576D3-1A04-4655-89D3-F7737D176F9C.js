function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new Uint8ClampedArray(Uint8ClampedArray, F0, Uint8ClampedArray);
class C4 extends F0 {
}
C4.raw = v3;
function f5(a6) {
    function f7() {
        String.raw(C4);
        const v11 = String.prototype.localeCompare;
        Object.defineProperty(v11, Symbol.toPrimitive, { writable: true, value: f5 });
        v11.apply(v11);
        return f7;
    }
    try { f7(); } catch (e) {}
    return f7;
}
f5(v3);
