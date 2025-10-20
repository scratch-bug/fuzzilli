class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5();
function f13() {
}
class C14 {
    2 = f13;
}
const v15 = new C14();
const v16 = v15[2];
new C14();
const v20 = /NII/uyg.constructor;
!"w";
v16();
new v20();
try { new BigUint64Array(318610984); } catch (e) {}
new BigUint64Array();
function f36() {
}
function f37() {
    function f38() {
        function F39(a41, a42) {
            if (!new.target) { throw 'must be called with new'; }
            const t29 = globalThis.performance.measureMemory;
            t29();
        }
        new F39();
        for (let v48 = 0; v48 < 5; v48++) {
            v48++;
        }
        return { done: WeakMap };
    }
    return { next: f38 };
}
const v52 = Symbol.iterator;
const v53 = { [v52]: f37 };
const v93 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v135 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f136() {
    const v139 = await WebAssembly.compile(v93);
    const v141 = await WebAssembly.compile(v135);
    const t47 = WebAssembly.Instance;
    const v143 = new t47(v139);
    const v144 = WebAssembly.Instance;
    const v146 = v143.exports.exp;
    const v147 = { imp: v146 };
    const v149 = new v144(v141, { env: v147 });
    const t53 = WebAssembly.promising(v149.exports.re_exp);
    t53();
}
f136();
f36.bind(null, ...v53);
const v189 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
const t59 = WebAssembly.Module;
new t59(v189);
