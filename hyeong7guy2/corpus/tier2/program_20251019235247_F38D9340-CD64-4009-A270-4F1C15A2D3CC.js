class C1 {
    [1073741824] = 1073741824;
}
const v2 = new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
}
const v8 = new F3();
const v9 = /(?<a>)/dusygmi;
const v11 = new Uint8Array();
const v13 = [v9,Map,v11];
v13.push(v8);
const v17 = JSON.stringify({ arguments: v13 });
const v18 = JSON.parse;
const v19 = [v17,v18];
try { v18.apply(JSON, v19); } catch (e) {}
