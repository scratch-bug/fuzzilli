const v0 = class {
}
new v0();
const v74 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc({ execution: "sync" });
const v120 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f121() {
    const v124 = await WebAssembly.compile(v74);
    const v125 = WebAssembly.compile(v120);
    Math.floor(0);
    const v128 = await v125;
    const t10 = WebAssembly.Instance;
    const v130 = new t10(v124);
    const v131 = WebAssembly.Instance;
    const v132 = v130.exports;
    const v133 = v132.exp;
    const v134 = { imp: v133 };
    const v136 = new v131(v128, { env: v134 });
    const v137 = v136.exports;
    const v139 = WebAssembly.promising(v137.re_exp);
    v139(v139, v137);
    return v132;
}
f121();
const v145 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v187 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f188() {
    const v190 = WebAssembly.compile(v145);
    v190.constructor = f188;
    const v191 = await v190;
    const v193 = await WebAssembly.compile(v187);
    const t31 = WebAssembly.Instance;
    const v195 = new t31(v191);
    const v196 = WebAssembly.Instance;
    const v197 = v195.exports;
    const v198 = v197.exp;
    const v199 = { imp: v198 };
    const v201 = new v196(v193, { env: v199 });
    const v202 = v201.exports;
    const v204 = WebAssembly.promising(v202.re_exp);
    v204(v204, v202);
    return v197;
}
f188();
