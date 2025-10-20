const v2 = new Uint8ClampedArray(127);
const v3 = [Uint8ClampedArray,Uint8ClampedArray,Uint8ClampedArray,Uint8ClampedArray];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0.2778049230856068;
}
const v9 = new F5();
const v10 = [v3,0.2778049230856068,v9,v9,v2];
const v15 = Intl.NumberFormat().formatRangeToParts(8, -144.6422562264937);
const v16 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
v16.toJSON = v10;
const v17 = { arguments: v16 };
Object.defineProperty(v17, "toJSON", { configurable: true, enumerable: true, value: v15 });
const v19 = JSON.stringify(v17);
const v20 = JSON.parse;
v20.apply(JSON, [v19]);
