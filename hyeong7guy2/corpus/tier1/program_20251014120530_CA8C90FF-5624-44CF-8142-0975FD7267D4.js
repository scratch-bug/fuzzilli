Symbol.iterator;
const v2 = {};
Symbol.iterator;
Symbol.iterator;
[2.2250738585072014e-308,1e-15,3.3226577805151774];
const v10 = class extends Uint16Array {
    set g(a12) {
    }
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
new F13(-1626183360, -1626183360);
new v10();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    const v100 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    const v143 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    async function f144() {
        const v147 = await WebAssembly.compile(v100);
        const v149 = await WebAssembly.compile(v143);
        const t21 = WebAssembly.Instance;
        const v151 = new t21(v147);
        const v152 = WebAssembly.Instance;
        const v154 = v151.exports.exp;
        const v155 = { imp: v154 };
        const v157 = new v152(v149, { env: v155 });
        const t27 = v157.exports.re_exp;
        t27();
    }
    f144();
    const v165 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    const v207 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    async function f208() {
        const v211 = await WebAssembly.compile(v165);
        const v213 = await WebAssembly.compile(v207);
        const t36 = WebAssembly.Instance;
        const v215 = new t36(v211);
        const v216 = WebAssembly.Instance;
        const v218 = v215.exports.exp;
        const v219 = { imp: v218 };
        const v221 = new v216(v213, { env: v219 });
        const t42 = v221.exports.re_exp;
        t42();
    }
    f208();
}
new F22();
