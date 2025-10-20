function f0() {
    return f0;
}
try {
    Object.defineProperty(Intl, "minutes", { writable: true, configurable: true, value: 0 });
    const t5 = Intl.DurationFormat;
    new t5(f0, Intl);
} catch(e5) {
}
