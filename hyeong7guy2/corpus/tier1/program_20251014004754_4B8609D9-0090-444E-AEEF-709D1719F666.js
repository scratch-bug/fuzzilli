const v0 = class {
}
const v1 = new v0();
const v2 = new v0();
const v3 = new v0();
const v4 = new v0();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
}
new F6(v3, v1, v2, v4);
new F6(false, v1, v3, v4);
const v62 = class {
}
const v87 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc({ execution: "sync" });
const v133 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f134() {
    const v137 = await WebAssembly.compile(v87);
    const v138 = WebAssembly.compile(v133);
    Math.floor(0);
    const v141 = await v138;
    const t21 = WebAssembly.Instance;
    const v143 = new t21(v137);
    const v144 = WebAssembly.Instance;
    const v145 = v143.exports;
    const v146 = v145.exp;
    const v147 = { imp: v146 };
    const v149 = new v144(v141, { env: v147 });
    const v150 = v149.exports;
    const v152 = WebAssembly.promising(v150.re_exp);
    const v154 = {};
    for (let i156 = 0; i156 < 20000; i156++) {
        v154[1] = 2;
        const v166 = v154[1];
        const v169 = new Proxy(Uint8Array, {});
        v169[128];
        Array(v166);
    }
    v152(v152, v150);
    return v145;
}
f134();
const v177 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v219 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f220() {
    const v223 = await WebAssembly.compile(v177);
    const v225 = await WebAssembly.compile(v219);
    const t48 = WebAssembly.Instance;
    const v227 = new t48(v223);
    const v228 = WebAssembly.Instance;
    const v230 = v227.exports.exp;
    const v231 = { imp: v230 };
    const v233 = new v228(v225, { env: v231 });
    const v234 = v233.exports;
    const v236 = WebAssembly.promising(v234.re_exp);
    v236(v236, v234);
}
f220();
