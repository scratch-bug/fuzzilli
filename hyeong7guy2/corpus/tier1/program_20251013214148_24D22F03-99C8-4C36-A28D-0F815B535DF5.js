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
const v76 = {};
v76.f = 1;
v76.e = 10;
const v77 = {};
v77.f = 1;
v77.e = 10;
v77.d = 0;
const v78 = {};
v78.f = 1;
v78.e = 10;
v78.d = 0;
const v80 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
function f96(a97) {
    return a97;
}
const v98 = class extends f96 {
    static ["NFD"](a100, a101, a102, a103) {
        return a101;
    }
}
const v131 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f132() {
    const v135 = await WebAssembly.compile(v80);
    const v136 = WebAssembly.compile(v131);
    v136 / v136;
    Math.acos(WebAssembly);
    Math.floor(-7913);
    const v144 = await v136;
    const t59 = WebAssembly.Instance;
    const v146 = new t59(v135);
    const v147 = WebAssembly.Instance;
    const v148 = v146.exports;
    const v149 = v148.exp;
    const v150 = { imp: v149 };
    const v152 = new v147(v144, { env: v150 });
    const v153 = v152.exports;
    const v155 = WebAssembly.promising(v153.re_exp);
    v155(v155, v153);
    return v148;
}
f132();
