for (let i5 = 0, i6 = 10;
    i6;
    (() => {
        const v9 = i6--;
        class C11 extends Map {
        }
        C11.toJSON = Array;
        const v16 = Intl.NumberFormat(v9, 193).formatRangeToParts(-574902674, -144.6422562264937);
        v16.unshift(C11);
        const v18 = {};
        Object.defineProperty(v18, "toJSON", { configurable: true, enumerable: true, value: v16 });
        const v20 = JSON.stringify(v18, 6, 193);
        const v21 = JSON.parse;
        v21.apply(JSON, [v20]);
    })()) {
}
