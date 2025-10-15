function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        const v4 = { ...this };
        let v5;
        try { v5 = v4.createExternalizableTwoByteString(F0, f2); } catch (e) {}
        return v5;
    }
    f2();
}
new F0();
