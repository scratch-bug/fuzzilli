function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this[9] >>>= -5.084554891633513;
}
const v7 = new F1(F1, F1, -5.084554891633513, F1);
for (let i10 = 0, i11 = 10;
    i11;
    (() => {
        i11--;
        const v19 = Intl.NumberFormat(i10, -574902674).formatRangeToParts(-574902674, -144.6422562264937);
        v19[11] = v7;
        const v20 = {};
        Object.defineProperty(v20, "toJSON", { configurable: true, enumerable: true, value: v19 });
        const v22 = JSON.stringify(v20);
        const v23 = JSON.parse;
        v23.apply(JSON, [v22]);
    })()) {
}
