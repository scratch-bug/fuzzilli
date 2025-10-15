function f3(a4) {
    const t1 = Temporal.PlainMonthDay;
    const v7 = new t1(1.0, 1.0);
    try { v7.toPlainDate(-2); } catch (e) {}
    return -2;
}
Symbol.toString = f3;
Symbol.toString(Symbol);
