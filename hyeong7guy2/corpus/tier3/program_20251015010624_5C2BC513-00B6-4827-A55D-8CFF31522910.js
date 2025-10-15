try {
    const v1 = Intl.NumberFormat;
    const v3 = {};
    v3[Symbol.toPrimitive] = v1;
    v3.unit = v3;
    v1("yue", v3);
} catch(e7) {
}
