const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v38 = new t1(v35);
function f39() {
    return f39;
}
const v40 = { f: f39 };
const v41 = { m: v40 };
const v42 = WebAssembly.Instance;
const v43 = new v42(v38, v41);
const v45 = v43.exports.main;
for (let i47 = 0;
    (() => {
        v45();
        for (const v50 in v42) {
        }
        return i47 < 20000;
    })();
    i47++) {
}
