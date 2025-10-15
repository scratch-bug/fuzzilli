function f2(a3) {
    const v5 = Temporal.PlainMonthDay;
    const v6 = new v5(1.0, 1.0);
    try { v6.valueOf(Symbol, f2, v6, a3, v5); } catch (e) {}
    return Symbol;
}
Symbol.toString = f2;
Symbol.toString(1.0, Symbol, 1.0);
