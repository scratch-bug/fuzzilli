class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        a3.caller;
        return this;
    }
    try { f5(); } catch (e) {}
}
new F1(C0);
