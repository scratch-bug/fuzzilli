class C1 {
}
new C1();
const v41 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v83 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f84() {
    const v87 = await WebAssembly.compile(v41);
    const v89 = await WebAssembly.compile(v83);
    const t8 = WebAssembly.Instance;
    const v91 = new t8(v87);
    const v92 = WebAssembly.Instance;
    const v94 = v91.exports.exp;
    const v95 = { imp: v94 };
    const v97 = new v92(v89, { env: v95 });
    const t14 = WebAssembly.promising(v97.exports.re_exp);
    t14();
}
f84();
