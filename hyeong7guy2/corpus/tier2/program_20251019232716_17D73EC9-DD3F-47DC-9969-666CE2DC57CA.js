function f0() {
    return f0;
}
const v6 = Intl.NumberFormat(Intl, -574902674, Intl, -144.6422562264937).formatRangeToParts(-574902674, -144.6422562264937);
v6.unshift(-574301.3402958019);
const v9 = {};
Object.defineProperty(v9, "toJSON", { configurable: true, enumerable: true, value: v6 });
const v11 = JSON.stringify(v9);
const v12 = JSON.parse;
const v13 = [v11];
v13.push(f0);
v12.apply(Symbol, v13);
