try {
    const v1 = Intl.NumberFormat;
    const v3 = {};
    Object.defineProperty(v3, "compactDisplay", { enumerable: true, value: "yue" });
    v1("yue", v3);
} catch(e5) {
}
