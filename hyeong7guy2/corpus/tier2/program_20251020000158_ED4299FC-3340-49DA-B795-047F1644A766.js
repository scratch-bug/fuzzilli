for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        const v11 = Intl.NumberFormat(i3--, -1.6901229681502517e+308).formatRangeToParts(-574902674, -1.6901229681502517e+308);
        const v12 = {};
        Object.defineProperty(v12, "toJSON", { configurable: true, enumerable: true, value: v11 });
        const v14 = JSON.stringify(v12);
        const v15 = JSON.parse;
        v15.apply(JSON, [v14]);
    })()) {
}
