const v0 = {};
function f1() {
    return f1;
}
function f2(a3) {
    return a3;
}
Object.defineProperty(v0, "f", { configurable: true, enumerable: true, get: f1, set: f2 });
const v9 = Intl.NumberFormat().formatRangeToParts(-574902674, -144.6422562264937);
const v11 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
const v16 = {
    day: 512,
    construct(a13, a14) {
        return a14;
    },
    done: false,
    arguments: v11,
    toString() {
        return this;
    },
};
Object.defineProperty(v16, "toJSON", { configurable: true, enumerable: true, value: v9 });
const v18 = JSON.stringify(v16);
const v19 = JSON.parse;
v19.apply(JSON, [v18]);
