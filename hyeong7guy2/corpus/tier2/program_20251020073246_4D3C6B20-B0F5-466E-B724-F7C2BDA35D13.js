const v2 = new Uint8ClampedArray(127);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0.2778049230856068;
}
const v8 = new F4(v2, 0.2778049230856068);
const v9 = [Uint8ClampedArray,0.2778049230856068,v8,v8,v2];
const v10 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/dgi;
v10.toJSON = v9;
const v13 = JSON.stringify({ arguments: v10 });
const v14 = JSON.parse;
v14.apply(JSON, [v13]);
