async function f0(a1, a2, a3) {
    return f0;
}
function f4() {
    const t4 = Temporal.PlainYearMonth;
    const v8 = new t4(12, 12);
    return v8;
}
f0.then = f4;
f0();
