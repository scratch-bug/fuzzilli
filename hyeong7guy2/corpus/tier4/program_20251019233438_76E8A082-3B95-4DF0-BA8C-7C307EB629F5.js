try {
    const v1 = Intl.NumberFormat;
    const v3 = Symbol.toPrimitive;
    function f5() {
        return {};
    }
    const v7 = { [v3]: f5 };
    v7.currencyDisplay = v7;
    v1("yue", v7);
} catch(e9) {
}
