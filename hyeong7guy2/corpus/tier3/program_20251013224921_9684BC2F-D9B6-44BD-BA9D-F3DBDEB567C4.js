function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F5();
    return f2;
}
F0[Symbol.toPrimitive] = f2;
try { F0.hasOwnProperty(F0); } catch (e) {}
