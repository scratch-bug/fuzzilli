try {
    const v2 = Intl.NumberFormat;
    v2("yue", { currency: "DDM", numberingSystem: "hant", unit: "pM" });
} catch(e8) {
}
