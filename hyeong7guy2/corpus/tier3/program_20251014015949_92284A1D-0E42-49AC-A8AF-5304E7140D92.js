function f1() {
    return f1;
}
function f3(a4) {
    const t4 = Temporal.PlainMonthDay;
    new t4(1.0, 1.0, a4);
    return 1.0;
}
Symbol.toString = f3;
try { Symbol.toString(f1); } catch (e) {}
