const v1 = class extends Float32Array {
}
function f2() {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = {};
        const t5 = Temporal.PlainTime;
        const v9 = new t5();
        v9.with(v6);
    }
    const v11 = new F3();
    return v11;
}
v1.constructor = f2;
try { v1.constructor(); } catch (e) {}
