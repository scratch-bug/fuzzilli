const v0 = [];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0.2778049230856068;
}
const v6 = new F2();
const v7 = [v0,0.2778049230856068,v6,v6];
const v12 = Intl.NumberFormat(Intl, F2).formatRangeToParts(-574902674, -144.6422562264937);
const v13 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
v13.toJSON = v7;
const v14 = { arguments: v13 };
Object.defineProperty(v14, "toJSON", { configurable: true, enumerable: true, value: v12 });
const v16 = JSON.stringify(v14);
const v17 = JSON.parse;
v17.apply(JSON, [v16]);
