function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const t6 = Temporal.Duration;
        const v13 = new t6(7, a10);
        v13.with(v13);
    }
    new F7(F7, 2147483649);
}
F1[Symbol.toPrimitive] = f5;
class C18 {
    static [F1](a20, a21, a22) {
    }
}
