[];
for (let i34 = 0, i35 = 10; i35; i35--) {
}
const v52 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v77 = { execution: "sync" };
const v97 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f98() {
    const v101 = await WebAssembly.compile(v52);
    const v103 = await WebAssembly.compile(v97);
    const t9 = WebAssembly.Instance;
    const v105 = new t9(v101);
    const v106 = WebAssembly.Instance;
    const v108 = v105.exports.exp;
    const v109 = { imp: v108 };
    const v111 = new v106(v103, { env: v109 });
    const t15 = WebAssembly.promising(v111.exports.re_exp);
    t15();
}
for (let v116 = 0; v116 < 42; v116++) {
    f98();
}
