const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v39 = new t1(v36);
function f40() {
    const t4 = [268435439,4294967297,-9007199254740992];
    t4.length = 9;
    return 1;
}
const v43 = { f: f40 };
const v44 = { m: v43 };
const t10 = WebAssembly.Instance;
const v46 = new t10(v39, v44);
const v48 = v46.exports.main;
for (let i50 = 0; v48(i50), i50 < 20000; i50++) {
}
class C57 extends WeakMap {
}
new C57();
