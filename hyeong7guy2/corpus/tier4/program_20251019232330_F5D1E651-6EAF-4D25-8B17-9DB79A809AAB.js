function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(v4, v4); } catch (e) {}
    function f6() {
        function f7(a8) {
            return a3;
        }
        f7.call(this, this);
        return F0;
    }
    f6();
}
new F0();
