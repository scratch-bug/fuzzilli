try {
    const v2 = Intl.NumberFormat;
    const v4 = {};
    v4[Symbol.toPrimitive] = Symbol;
    Object.defineProperty(v4, "style", { writable: true, configurable: true, enumerable: true, value: v4 });
    v2("yue", v4);
} catch(e7) {
}
