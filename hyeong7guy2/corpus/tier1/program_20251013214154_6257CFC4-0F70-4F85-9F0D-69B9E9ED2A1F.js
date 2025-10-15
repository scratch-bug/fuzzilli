new Uint16Array(9);
const v4 = class {
    get h() {
        const v6 = %WasmStruct();
        return 10;
    }
    static #e;
}
new v4();
[NaN,-1000.0,851.7391730332283,0.605583673586847];
const v12 = ("maximumSignificantDigits").normalize("NFD");
const v13 = class {
    set h(a15) {
    }
    static set c(a17) {
    }
    static #n(a19, a20, a21, a22) {
        return a21;
    }
}
new v13();
new v13();
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "NFD";
}
new F25("NFD", "NFD", "NFD", "NFD");
new F25("NFD", v12, "NFD", "NFD");
new F25("maximumSignificantDigits", "maximumSignificantDigits", "maximumSignificantDigits", v12);
function F34(a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F34.__proto__ = F34; } catch (e) {}
const t33 = {};
t33.f = 1;
%VerifyType(0);
new Proxy(v13, {});
const v79 = {};
v79.f = 1;
v79.e = 10;
const v80 = {};
v80.f = 1;
v80.e = 10;
v80.d = 0;
const v81 = {};
v81.f = 1;
v81.e = 10;
v81.d = 0;
const v83 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
function f99(a100) {
    return a100;
}
const v101 = class extends f99 {
    static ["NFD"](a103, a104, a105, a106) {
        return a104;
    }
}
const v134 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f135() {
    const v138 = await WebAssembly.compile(v83);
    const v140 = await WebAssembly.compile(v134);
    const t61 = WebAssembly.Instance;
    const v142 = new t61(v138);
    const v143 = WebAssembly.Instance;
    const v145 = v142.exports.exp;
    const v146 = { imp: v145 };
    const v148 = new v143(v140, { env: v146 });
    const v149 = v148.exports;
    const v150 = v149.re_exp;
    for (let v151 = 0; v151 < 32; v151++) {
    }
    const v152 = WebAssembly.promising(v150);
    v152(v152, v149);
}
f135();
