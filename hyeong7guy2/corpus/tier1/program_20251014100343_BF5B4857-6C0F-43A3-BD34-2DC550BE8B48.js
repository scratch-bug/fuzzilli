const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v38 = new t1(v35);
function f39() {
}
const v40 = { f: f39 };
const v41 = { m: v40 };
const t7 = WebAssembly.Instance;
const v44 = new t7(v38, v41);
const v46 = v44.exports.main;
for (let i48 = 0;
    (() => {
        try { v46(); } catch (e) {}
        return i48 < 20000;
    })();
    i48++) {
}
