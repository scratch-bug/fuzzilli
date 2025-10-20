function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(F1, F1, F1, -5.084554891633513);
v7.toJSON = -5.084554891633513;
for (let i10 = 0, i11 = 10;
    i11;
    (() => {
        i11--;
        const v19 = Intl.NumberFormat().formatRangeToParts(-574902674, -144.6422562264937);
        v19.copyWithin(-5.084554891633513);
        v19[11] = v7;
        const v21 = {};
        Object.defineProperty(v21, "toJSON", { configurable: true, enumerable: true, value: v19 });
        const v23 = JSON.stringify(v21);
        const v24 = JSON.parse;
        v24.apply(JSON, [v23]);
    })()) {
}
