[-14496,-14,-9223372036854775808,-33376];
class C1 {
}
for (let i25 = 0; i25 < 20000; i25++) {
}
const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t6 = WebAssembly.Module;
const v48 = new t6(v45);
function f49() {
}
const v50 = { f: f49 };
const v51 = { m: v50 };
const t12 = WebAssembly.Instance;
const v53 = new t12(v48, v51);
const v55 = v53.exports.main;
for (let i57 = 0; i57 < 20000; i57++) {
    v55();
}
