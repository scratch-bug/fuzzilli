function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        const t3 = Temporal.PlainTime;
        new t3(2.2250738585072014e-308);
        Uint16Array.h = a4;
    }
}
new F2();
