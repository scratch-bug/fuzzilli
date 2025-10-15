function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends Float64Array {
}
const v4 = new C3();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v4, 3641400605, { writable: true, configurable: true, value: F0 });
}
try { new F5(C3, C3, v4, v4); } catch (e) {}
