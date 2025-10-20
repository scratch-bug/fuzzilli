[1.2329116654900115e+307,0.8622505992407868,375.8445852081686,-378.92739345868006,-1.0,1000000000000.0];
new Float64Array(1);
function f9() {
    return 10;
}
new Uint16Array(185);
class C13 {
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
}
new F18();
function f26() {
}
class C27 {
    2 = f26;
}
const v28 = new C27();
const v29 = v28[2];
new C27();
const v32 = /NII/uyg;
Object.defineProperty(v32, "constructor", { writable: true, enumerable: true, value: f9 });
const v33 = v32.constructor;
!"w";
v29();
new v33();
try { new BigUint64Array(318610984); } catch (e) {}
new BigUint64Array();
function f49() {
}
function f50() {
    function f51() {
        function F52(a54, a55) {
            if (!new.target) { throw 'must be called with new'; }
            const t37 = globalThis.performance.measureMemory;
            t37();
        }
        new F52();
        for (let v61 = 0; v61 < 5; v61++) {
            v61++;
            f51[6] = "-09:09";
            Symbol[11];
            Object["getOwnPropertyDescriptor"]("getOwnPropertyDescriptor", "-09:09");
        }
        return { done: WeakMap };
    }
    return { next: f51 };
}
const v70 = Symbol.iterator;
const v71 = { [v70]: f50 };
const v111 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v153 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f154() {
    const v157 = await WebAssembly.compile(v111);
    const v159 = await WebAssembly.compile(v153);
    const t58 = WebAssembly.Instance;
    const v161 = new t58(v157);
    const v162 = WebAssembly.Instance;
    const v164 = v161.exports.exp;
    const v165 = { imp: v164 };
    const v167 = new v162(v159, { env: v165 });
    const t64 = WebAssembly.promising(v167.exports.re_exp);
    t64();
}
f154();
f49.bind(null, ...v71);
const v207 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
const t70 = WebAssembly.Module;
new t70(v207);
