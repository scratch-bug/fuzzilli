function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        const v4 = { ...this };
        try { v4.isOneByteString(a3, this, a3); } catch (e) {}
        return f2;
    }
    f2(F0);
}
new F0();
