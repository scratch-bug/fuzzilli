function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        return true;
    }
    a4.toString = f6;
    with (Uint16Array) {
        const t7 = Temporal.PlainDate;
        new t7(7, a4, a4, length);
    }
}
try { new F2(Uint16Array); } catch (e) {}
