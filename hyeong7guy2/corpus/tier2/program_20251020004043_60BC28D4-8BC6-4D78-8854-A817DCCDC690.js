function f1(a2) {
    const v3 = `
        ("🤯t3enA").localeCompare();
    `;
    return v3;
}
Object.defineProperty(f1, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f1 });
const t7 = Intl.NumberFormat;
t7(Symbol, Symbol).format(f1);
