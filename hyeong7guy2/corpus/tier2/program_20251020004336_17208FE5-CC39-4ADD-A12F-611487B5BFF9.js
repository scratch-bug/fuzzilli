const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v38 = new t1(v35);
function f39() {
    const t4 = [268435439,4294967297,-9007199254740992];
    t4.length = 9;
}
const v42 = { f: f39 };
const v43 = { m: v42 };
const t9 = WebAssembly.Instance;
const v45 = new t9(v38, v43);
const v47 = v45.exports.main;
for (let i49 = 0; v47(), i49 < 20000; i49++) {
}
