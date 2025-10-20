const v0 = [];
const v3 = new Float32Array(1024);
v3.toJSON = v0;
class C4 {
}
const v5 = new C4();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v5;
}
const v11 = /(?<a>)/dusygmi;
const v12 = new F6();
const v14 = [v11,Map,v12];
Object.defineProperty(v14, 3, { writable: true, configurable: true, value: v3 });
const v17 = JSON.stringify({ arguments: v14 });
const v18 = JSON.parse;
v18.apply(JSON, [v17]);
