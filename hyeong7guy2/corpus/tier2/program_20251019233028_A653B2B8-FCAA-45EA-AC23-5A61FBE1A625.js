function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return a9;
        }
        function f12(a13) {
            const v15 = Array();
            v15[177] = a13;
            const v17 = globalThis.Float16Array;
            new v17(v15);
            return v17;
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
        this.e = -1;
    }
    new F5(this, F0, a2, -1);
}
new F0(F0, F0);
