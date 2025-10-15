[51783,-1097295568,2,1073741825,58272,536870887,-9223372036854775808,128,9223372036854775807];
new Uint32Array(64);
function f6() {
    return 128;
}
new WeakMap();
new Set();
function f33(a34) {
    return Uint32Array;
}
class C35 extends f33 {
    set f(a37) {
    }
}
function f61(a62) {
    return 3;
}
class C63 extends f61 {
    [10];
}
function F79(a81, a82, a83, a84) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Temporal.PlainDateTime.from(a82);
    } catch(e88) {
    }
}
const v106 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc();
let v148 = undefined;
v148 = [];
const t30 = Array.prototype;
t30.length = 1;
const v155 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f156() {
    const v159 = await WebAssembly.compile(v106);
    const v161 = await WebAssembly.compile(v155);
    const t37 = WebAssembly.Instance;
    const v163 = new t37(v159);
    const v164 = WebAssembly.Instance;
    const v166 = v163.exports.exp;
    const v167 = %WasmStruct();
    for (let v168 = 0; v168 < 32; v168++) {
        v164["p" + v168] = v168;
    }
    const v171 = { imp: v166 };
    const v172 = { env: v171 };
    function F173(a175, a176) {
        if (!new.target) { throw 'must be called with new'; }
        function F177(a179, a180) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v181 = [F173,F173,F173,F173,F173];
        for (let i183 = 0;
            i183 < 20000;
            (() => {
                i183++;
                [F177] = v181;
            })()) {
        }
    }
    const v189 = new v164(v161, v172);
    const t62 = v189.exports.re_exp;
    t62(0, 1);
    return 65;
}
f156();
const v197 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
try {
const t0 = 1;
new t0();
} catch (e) {}
function f208() {
    return f208;
}
delete this.g;
class C218 {
    static set g(a220) {
    }
}
function f221() {
}
class C222 extends f221 {
}
const v248 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f249() {
    const v252 = await WebAssembly.compile(v197);
    const v254 = await WebAssembly.compile(v248);
    const t88 = WebAssembly.Instance;
    const v256 = new t88(v252);
    const v257 = WebAssembly.Instance;
    const v259 = v256.exports.exp;
    const v260 = { imp: v259 };
    const v262 = new v257(v254, { env: v260 });
    const v264 = v262.exports.re_exp;
    v264(v264, WebAssembly);
    return 110;
}
f249();
