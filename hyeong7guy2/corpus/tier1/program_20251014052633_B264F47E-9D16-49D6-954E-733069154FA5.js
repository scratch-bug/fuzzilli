const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t1 = WebAssembly.Module;
const v39 = new t1(v36);
function f40() {
    return 4;
}
const v41 = { f: f40 };
const v42 = { m: v41 };
const t8 = WebAssembly.Instance;
const v44 = new t8(v39, v42);
const v46 = v44.exports.main;
for (let i48 = 0; i48 < 20000; i48++) {
    for (let v54 = 0; v54 < 10; v54++) {
        let v55 = Symbol.bind();
    }
    v46();
}
