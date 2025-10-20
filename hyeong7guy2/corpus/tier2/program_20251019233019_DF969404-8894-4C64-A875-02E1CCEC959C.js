class C1 extends Int32Array {
}
function f2(a3) {
    return f2;
}
Object.defineProperty(C1, "constructor", { value: f2 });
const t6 = C1.constructor;
new t6();
const v11 = Intl.NumberFormat().formatRangeToParts(-574902674, -144.6422562264937);
const v13 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
const v18 = {
    day: 512,
    construct(a15, a16) {
        return a16;
    },
    done: false,
    arguments: v13,
    toString() {
        return this;
    },
};
Object.defineProperty(v18, "toJSON", { configurable: true, enumerable: true, value: v11 });
const v20 = JSON.stringify(v18);
const v21 = JSON.parse;
v21.apply(JSON, [v20]);
