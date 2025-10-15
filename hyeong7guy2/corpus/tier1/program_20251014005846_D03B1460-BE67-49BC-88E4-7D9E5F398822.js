new BigInt64Array(1657901250);
const v41 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v83 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f84() {
    const v87 = await WebAssembly.compile(v41);
    const v88 = WebAssembly.compile(v83);
    Math.floor();
    const v91 = await v88;
    const t7 = WebAssembly.Instance;
    const v93 = new t7(v87);
    const v94 = WebAssembly.Instance;
    const v95 = v93.exports;
    const v96 = v95.exp;
    const v97 = { imp: v96 };
    const v99 = new v94(v91, { env: v97 });
    const v103 = new SharedArrayBuffer(9, {});
    new DataView(v103);
    const v106 = v99.exports;
    const v108 = WebAssembly.promising(v106.re_exp);
    v108(v108, v106);
    return v95;
}
f84();
