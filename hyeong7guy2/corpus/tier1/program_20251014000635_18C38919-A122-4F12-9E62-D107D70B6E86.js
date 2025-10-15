const v72 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc({ execution: "sync" });
const v118 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f119() {
    const v122 = await WebAssembly.compile(v72);
    const v123 = WebAssembly.compile(v118);
    Math.floor(0);
    const v126 = await v123;
    const t7 = WebAssembly.Instance;
    const v128 = new t7(v122);
    const v129 = WebAssembly.Instance;
    const v130 = v128.exports;
    const v131 = v130.exp;
    const v132 = { imp: v131 };
    const v134 = new v129(v126, { env: v132 });
    const v135 = v134.exports;
    const v137 = WebAssembly.promising(v135.re_exp);
    v137(v137, v135);
    return v130;
}
f119();
const v143 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v185 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f186() {
    const v188 = WebAssembly.compile(v143);
    v188.constructor = f186;
    const v189 = await v188;
    const v191 = await WebAssembly.compile(v185);
    const t28 = WebAssembly.Instance;
    const v193 = new t28(v189);
    const v194 = WebAssembly.Instance;
    const v195 = v193.exports;
    const v196 = v195.exp;
    const v197 = { imp: v196 };
    const v199 = new v194(v191, { env: v197 });
    const v200 = v199.exports;
    const v202 = WebAssembly.promising(v200.re_exp);
    v202(v202, v200);
    return v195;
}
f186();
