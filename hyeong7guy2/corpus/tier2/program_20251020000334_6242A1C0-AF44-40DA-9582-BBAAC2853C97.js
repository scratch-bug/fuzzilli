const v4 = Intl.NumberFormat(Intl, Intl, Intl, Intl, -144.6422562264937);
const v5 = v4.formatRangeToParts(-574902674, -144.6422562264937);
const v7 = Symbol.iterator;
const v9 = {
    [v7]() {
    },
};
const v11 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
const v16 = {
    day: 512,
    construct(a13, a14) {
        return this;
    },
    done: false,
    arguments: v11,
    toString() {
        return v4;
    },
};
Object.defineProperty(v16, "toJSON", { configurable: true, enumerable: true, value: v5 });
const v18 = JSON.stringify(v16);
const v19 = JSON.parse;
v19.apply(JSON, [v18]);
