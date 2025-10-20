class C1 extends Map {
}
const v2 = new C1();
const v7 = Intl.NumberFormat(v2, Intl).formatRangeToParts(-574902674, -144.6422562264937);
v7.unshift(v2);
const v9 = {};
Object.defineProperty(v9, "toJSON", { configurable: true, enumerable: true, value: v7 });
const v11 = JSON.stringify(v9);
const v12 = JSON.parse;
v12.apply(JSON, [v11]);
