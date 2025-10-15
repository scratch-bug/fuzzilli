function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let v9 = 0; v9 < 5; v9++) {
        function f11() {
            return f11;
        }
        F5.e <<= 100000;
    }
}
new F0();
