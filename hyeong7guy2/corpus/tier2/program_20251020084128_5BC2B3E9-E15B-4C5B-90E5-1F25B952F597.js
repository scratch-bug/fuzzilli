const v0 = {};
const v3 = new Uint8ClampedArray(2443);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = [Uint8ClampedArray,0.2778049230856068,F5,v0,v3];
const v14 = Intl.NumberFormat().formatRangeToParts(8, -144.6422562264937);
const v15 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
v15.toJSON = v9;
const v16 = { arguments: v15 };
Object.defineProperty(v16, "toJSON", { configurable: true, enumerable: true, value: v14 });
const v18 = JSON.stringify(v16);
const v19 = JSON.parse;
v19.apply(JSON, [v18]);
