function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v8 = 0; v8 < 100; v8++) {
    const v9 = {};
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f14() {
    }
    try { v4(); } catch (e) {}
    const v16 = {};
    eval();
    const v20 = new WeakSet();
    const v21 = v20.delete();
    v21 || v21;
}
