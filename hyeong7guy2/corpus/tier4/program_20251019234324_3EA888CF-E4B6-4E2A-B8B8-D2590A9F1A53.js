function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4) {
        let v5;
        try { v5 = this.createExternalizableTwoByteString(255); } catch (e) {}
        return v5;
    }
    f3();
}
new F1();
