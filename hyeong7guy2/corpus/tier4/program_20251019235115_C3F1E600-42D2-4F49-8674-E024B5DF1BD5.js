function f0() {
    const v3 = Temporal.PlainDate.prototype;
    v3.toPlainYearMonth();
    return v3;
}
try { f0(); } catch (e) {}
