function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v7 = new t2();
    function f8() {
        return 3648;
    }
    function f9(a10) {
        return Temporal;
    }
    Object.defineProperty(v7, "roundingIncrement", { enumerable: true, get: f8, set: f9 });
    v7.since(v7, v7);
}
try { new F1(F1, 3648); } catch (e) {}
