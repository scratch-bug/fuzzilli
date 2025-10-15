const v1 = class {
}
const v37 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t3 = WebAssembly.Module;
const v40 = new t3(v37);
function f41() {
    return 4;
}
const v42 = { f: f41 };
const v43 = { m: v42 };
const t10 = WebAssembly.Instance;
const v45 = new t10(v40, v43);
const v47 = v45.exports.main;
for (let i49 = 0;
    (() => {
        v43.c = {};
        return i49 < 20000;
    })();
    i49++) {
    v47();
    const v58 = new Uint8ClampedArray();
    v1[v58.byteLength] = 8;
}
