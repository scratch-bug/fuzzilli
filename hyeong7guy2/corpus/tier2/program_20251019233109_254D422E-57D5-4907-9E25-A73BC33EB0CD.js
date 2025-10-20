for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        i3--;
        const v12 = Intl.NumberFormat().formatRangeToParts(-9007199254740990, -144.6422562264937);
        const v13 = {};
        Object.defineProperty(v13, "toJSON", { configurable: true, enumerable: true, value: v12 });
        const v15 = JSON.stringify(v13);
        const v16 = JSON.parse;
        try { v16(v15, Map); } catch (e) {}
    })()) {
}
