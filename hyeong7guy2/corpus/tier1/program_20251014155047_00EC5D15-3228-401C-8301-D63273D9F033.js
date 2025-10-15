function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return this;
        }
        function f12(a13) {
            for (let [v15] of "function") {
                const v17 = new Int32Array(this, -1);
                Object.seal(v17);
            }
            return this;
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
        this.e = -1;
    }
    new F5(this, -1, -1, F0);
}
new F0();
