function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = a2.constructor;
    t2();
}
function f6() {
    const v8 = Intl.DateTimeFormat;
    v8("ber", { calendar: "islamic-civil" });
    return f6;
}
F0.constructor = f6;
new F0(F0);
