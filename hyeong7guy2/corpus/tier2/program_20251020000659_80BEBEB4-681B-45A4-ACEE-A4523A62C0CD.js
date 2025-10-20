function f0() {
    const v2 = Intl.DateTimeFormat;
    return v2("guz", { calendar: "japanese" }).format();
}
Object.defineProperty(d8, "toString", { configurable: true, value: f0 });
with (d8) {
    const t6 = test.FastCAPI;
    const v11 = new t6();
    v11.call_to_number(d8);
}
