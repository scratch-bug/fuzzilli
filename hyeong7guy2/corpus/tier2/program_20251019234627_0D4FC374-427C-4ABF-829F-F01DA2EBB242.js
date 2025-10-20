for (let i4 = 0, i5 = 10;
    i5;
    (() => {
        i5--;
        const v13 = Intl.NumberFormat(6).formatRangeToParts(-574902674, -144.6422562264937);
        const v14 = {};
        Object.defineProperty(v14, "toJSON", { configurable: true, enumerable: true, value: v13 });
        const v16 = JSON.stringify(v14, 6, 193);
        const v17 = JSON.parse;
        v17.apply(JSON, [v16]);
    })()) {
}
