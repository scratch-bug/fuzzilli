new Uint16Array(15);
new Uint16Array(14);
class C7 {
    [14](a9, a10) {
        let v11 = 10;
        for (; v11--;) {
            function f13(a14, a15, a16) {
                f13(a16, 14, 14);
                %PrepareFunctionForOptimization(f13);
                f13(a16, 14, 14);
                f13(a16, 14, 14);
                %OptimizeMaglevOnNextCall(a14);
                f13(a16, 14, 14);
            }
            new Promise(f13);
        }
        return 15;
    }
}
new C7();
new C7();
const v25 = new C7();
function f26() {
    return v25;
}
class C29 {
    static {
    }
    static 6;
    static d;
}
new C29();
new C29();
new C29();
new C29();
const v108 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc({ execution: "sync" });
const v154 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f155() {
    const v158 = await WebAssembly.compile(v108);
    const v159 = WebAssembly.compile(v154);
    Math.floor(0);
    const v162 = await v159;
    const t42 = WebAssembly.Instance;
    const v164 = new t42(v158);
    const v165 = WebAssembly.Instance;
    const v166 = v164.exports;
    const v167 = v166.exp;
    const v168 = { imp: v167 };
    const v170 = new v165(v162, { env: v168 });
    const v171 = v170.exports;
    const v173 = WebAssembly.promising(v171.re_exp);
    v173(v173, v171);
    return v166;
}
f155();
const v179 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v221 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f222() {
    const v224 = WebAssembly.compile(v179);
    v224.constructor = f222;
    const v225 = await v224;
    const v227 = await WebAssembly.compile(v221);
    const t63 = WebAssembly.Instance;
    const v229 = new t63(v225);
    const v230 = WebAssembly.Instance;
    const v231 = v229.exports;
    const v232 = v231.exp;
    const v233 = { imp: v232 };
    const v235 = new v230(v227, { env: v233 });
    const v236 = v235.exports;
    const v238 = WebAssembly.promising(v236.re_exp);
    v238(v238, v236);
    return v231;
}
f222();
