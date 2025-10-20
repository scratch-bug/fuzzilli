function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4(F0, F0);
    const v6 = F0.constructor;
    v6();
    v6.call();
}
function f9() {
    new Uint8ClampedArray(268435441);
    const v15 = Temporal.PlainDateTime;
    return v15.from({ day: 14, month: 8, year: 0 });
}
F0.constructor = f9;
new F0(f9, F0, f9);
