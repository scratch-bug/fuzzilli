function f0() {
}
const v1 = class extends f0 {
}
const v41 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v83 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f84() {
    const v87 = await WebAssembly.compile(v41);
    const v89 = await WebAssembly.compile(v83);
    const t9 = WebAssembly.Instance;
    const v91 = new t9(v87);
    const v92 = WebAssembly.Instance;
    const v93 = v91.exports;
    const v94 = v93.exp;
    const v95 = { imp: v94 };
    const v97 = new v92(v89, { env: v95 });
    const v100 = WebAssembly.promising(v97.exports.re_exp);
    const v102 = {};
    for (let i104 = 0; i104 < 20000; i104++) {
        v102[1] = 2;
        ({})[128];
        Array(v102);
    }
    v100(v100);
    return v93;
}
f84();
new v1();
Date();
const v162 = Temporal.PlainTime;
v162.from({ hour: 22 });
