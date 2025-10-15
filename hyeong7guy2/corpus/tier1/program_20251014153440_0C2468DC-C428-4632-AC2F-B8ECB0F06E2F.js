class C0 {
}
new C0();
const v37 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t4 = WebAssembly.Module;
const v40 = new t4(v37);
function f41() {
    gc({ execution: "async" });
}
const v46 = { f: f41 };
const v47 = { m: v46 };
const t11 = WebAssembly.Instance;
const v49 = new t11(v40, v47);
const t13 = v49.exports.main;
t13();
