const v2 = class extends BigUint64Array {
}
const v3 = new v2();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -5.084554891633513;
    this.b = a7;
}
const v10 = new F4(v2, v3);
for (let i13 = 0, i14 = 10;
    i14;
    (() => {
        i14--;
        const v22 = Intl.NumberFormat(-574902674, -144.6422562264937, Intl, v3).formatRangeToParts(-574902674, -144.6422562264937);
        v22[11] = v10;
        const v23 = {};
        Object.defineProperty(v23, "toJSON", { configurable: true, enumerable: true, value: v22 });
        const v25 = JSON.stringify(v23);
        const v26 = JSON.parse;
        v26.apply(JSON, [v25]);
    })()) {
}
