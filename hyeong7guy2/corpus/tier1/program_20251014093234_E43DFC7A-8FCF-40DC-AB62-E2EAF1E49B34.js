function f1(a2) {
    a2();
}
const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t4 = WebAssembly.Module;
const v42 = new t4(v39);
function f43() {
}
const v44 = { f: f43 };
const v45 = { m: v44 };
const t10 = WebAssembly.Instance;
const v47 = new t10(v42, v45);
const v49 = v47.exports.main;
for (let i51 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i51 < 20000;
    })();
    (() => {
        const v59 = {
            construct(a57, a58) {
            },
        };
        i51++;
    })()) {
    f1(v49);
}
[-536870912,802490793,1073741823,443970345,3,-9,129,-34776];
