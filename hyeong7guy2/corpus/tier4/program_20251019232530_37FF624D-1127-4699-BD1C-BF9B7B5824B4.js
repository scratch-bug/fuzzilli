function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Array.prototype;
    function f8(a9) {
        with (v7) {
            length--;
        }
        return F0;
    }
    try { f8(F0); } catch (e) {}
}
new F0();
