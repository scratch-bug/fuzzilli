function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        const v4 = { ...this };
        try { v4.createExternalizableTwoByteString(); } catch (e) {}
        return F0;
    }
    f2(this);
}
new F0();
