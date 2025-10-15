const v0 = class {
}
const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t3 = WebAssembly.Module;
const v39 = new t3(v36);
function f40() {
}
const v41 = { f: f40 };
const v42 = { m: v41 };
const t9 = WebAssembly.Instance;
const v44 = new t9(v39, v42);
const v46 = v44.exports.main;
for (let i48 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i48 < 20000;
    })();
    i48++) {
    new Int32Array();
    for (let v60 = 0; v60 < 10; v60++) {
        v60 < 0;
    }
    v46();
}
new v0();
