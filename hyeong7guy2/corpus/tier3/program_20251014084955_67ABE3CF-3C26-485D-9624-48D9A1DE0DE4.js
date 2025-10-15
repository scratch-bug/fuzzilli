function f2(a3) {
    const t1 = Temporal.PlainMonthDay;
    new t1(1.0, 1.0);
    return a3;
}
Symbol.toString = f2;
Symbol.toString(1.0, Symbol, f2, Symbol, f2);
