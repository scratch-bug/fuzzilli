const v18 = class extends Array {
    static get h() {
    }
}
const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t5 = WebAssembly.Module;
const v42 = new t5(v39);
function f43() {
    return Uint8Array;
}
const v44 = { f: f43 };
const v45 = { m: v44 };
const v46 = WebAssembly.Instance;
const v47 = new v46(v42, v45);
const v49 = v47.exports.main;
for (let i51 = 0; i51 < 20000; i51++) {
    for (let v57 = 0; v57 < 5; v57++) {
        let v58 = Symbol.bind();
    }
    v49(v46);
}
