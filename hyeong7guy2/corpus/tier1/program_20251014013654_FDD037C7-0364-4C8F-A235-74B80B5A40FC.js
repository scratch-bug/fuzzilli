function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        ({ ...this }).load();
        return f2;
    }
    f2();
}
new F0();
