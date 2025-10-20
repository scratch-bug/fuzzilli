for (let i2 = 0, i3 = 10; i3; i3--) {
}
gc();
const v87 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f88() {
    const v90 = WebAssembly.compile(v87);
    const v92 = await v90;
    const v93 = WebAssembly.Instance;
    const v94 = Math.exp;
    const v95 = { imp: v94 };
    const v97 = new v93(v92, { env: v95 });
    const v99 = v97.exports.re_exp;
    const v100 = WebAssembly.promising(v99);
    v100(v99, v100, v94, v90, Math);
    return v100;
}
f88();
const v106 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v148 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f149() {
    const v152 = await WebAssembly.compile(v106);
    const v154 = await WebAssembly.compile(v148);
    const t22 = WebAssembly.Instance;
    const v156 = new t22(v152);
    const v157 = WebAssembly.Instance;
    const v159 = v156.exports.exp;
    const v160 = { imp: v159 };
    const v162 = new v157(v154, { env: v160 });
    const t28 = v162.exports.re_exp;
    t28();
    return 110;
}
f149();
