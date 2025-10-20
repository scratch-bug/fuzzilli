function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return F1;
        }
        function f12(a13) {
            const v14 = Array.prototype;
            for (let i16 = 0; i16 < 25000; i16++) {
                for (const v22 of v14) {
                }
            }
            return v14;
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
    }
    const v23 = new F5();
    v23.e = v23;
}
new F1(F1, Array);
