const t0 = Temporal.PlainDate;
const v4 = new t0(15, 5, 5);
try {
    const v6 = Intl.NumberFormat;
    const v8 = {};
    Object.defineProperty(v8, "numberingSystem", { writable: true, configurable: true, enumerable: true, value: v4 });
    v6("yue", v8);
} catch(e10) {
}
