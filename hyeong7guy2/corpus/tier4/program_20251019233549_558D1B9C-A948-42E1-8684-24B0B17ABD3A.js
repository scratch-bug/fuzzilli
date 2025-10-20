class C2 {
}
const v3 = new C2();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v3;
}
const v9 = new F4(v3, v3, F4);
const v10 = /(?<a>)/dusygmi;
const v11 = new F4();
Object.defineProperty(v11, "toJSON", { configurable: true, enumerable: true, value: 257 });
const v12 = [v10,Map,v11];
v12[3] = v11;
v12.push(v9);
const v14 = {};
v14.toJSON = v12;
const v16 = JSON.stringify(v14);
const v17 = JSON.parse;
v17.apply(JSON, [v16]);
