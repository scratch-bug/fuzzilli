const v2 = class {
}
function f3(a4) {
    const v5 = a4(a4, a4, f3, f3);
    const v7 = new Uint8ClampedArray();
    v7.byteLength;
    v2[8] = 8;
    return v5;
}
const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t10 = WebAssembly.Module;
const v47 = new t10(v44);
function f48() {
    return v47;
}
const v49 = { f: f48 };
const v50 = { m: v49 };
const t17 = WebAssembly.Instance;
const v52 = new t17(v47, v50);
const v54 = v52.exports.main;
for (let i56 = 0;
    (() => {
        const v57 = {};
        v57.c = v57;
        v57.defineProperty = Symbol;
        return i56 < 20000;
    })();
    i56++) {
    f3(v54);
}
