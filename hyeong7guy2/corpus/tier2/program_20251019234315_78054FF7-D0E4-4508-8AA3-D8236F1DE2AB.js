function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return a7;
    }
    Object.defineProperty(F0, "toString", { get: f9 });
}
const v10 = new F5();
const v11 = v10.constructor;
try { new v11(); } catch (e) {}
