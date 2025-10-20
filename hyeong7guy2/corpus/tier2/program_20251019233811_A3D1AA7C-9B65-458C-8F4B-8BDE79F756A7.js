const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v38 = new t1(v35);
function f39() {
    return 0;
}
const v40 = { f: f39 };
const v41 = { m: v40 };
const t8 = WebAssembly.Instance;
const v43 = new t8(v38, v41);
const v45 = v43.exports.main;
for (let i47 = 0;
    i47 < 20000;
    (() => {
        v40[i47] *= 97;
        i47++;
    })()) {
    v45(Uint8Array, 0, 4, v38);
}
