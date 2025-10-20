function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return F0;
        }
        function f12(a13) {
            parseInt(9007199254740992);
            return -1;
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
        this.e = -1;
    }
    new F5();
}
new F0();
