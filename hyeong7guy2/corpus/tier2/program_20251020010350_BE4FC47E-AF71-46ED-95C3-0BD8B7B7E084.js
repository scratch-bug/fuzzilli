const v0 = [0.4403142658807425,-1.503484565217448e+308];
new Float64Array(4);
function f4() {
}
const v5 = [4,v0,4];
const v6 = [3.0,-3.0,0.5600172520203662];
class C8 extends Float64Array {
    static p(a10, a11, a12) {
    }
}
new C8();
new Uint16Array();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
}
new F16();
function f24() {
}
class C25 {
    2 = f24;
}
const v26 = new C25();
const v27 = v26[2];
const v30 = /NII/uyg.constructor;
v27();
try { BigUint64Array(318610984); } catch (e) {}
new BigUint64Array();
function f41() {
}
function f42() {
    function f43() {
        function F44(a46, a47) {
            if (!new.target) { throw 'must be called with new'; }
            const t33 = globalThis.performance.measureMemory;
            t33();
        }
        new F44();
        for (let v53 = 0; v53 < 5; v53++) {
            v53++;
        }
        return { done: WeakMap };
    }
    return { next: f43 };
}
const v57 = Symbol.iterator;
const v58 = { [v57]: f42 };
v6[3] = Object;
function F81(a83, a84, a85) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 127;
}
new F81(v30, v0, v5);
const v104 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v146 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f147() {
    const v150 = await WebAssembly.compile(v104);
    const v152 = await WebAssembly.compile(v146);
    const t57 = WebAssembly.Instance;
    const v154 = new t57(v150);
    const v155 = WebAssembly.Instance;
    const v157 = v154.exports.exp;
    const v158 = { imp: v157 };
    const v160 = new v155(v152, { env: v158 });
    const t63 = WebAssembly.promising(v160.exports.re_exp);
    t63();
}
f147();
f41.bind(null, ...v58);
const v201 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
const t69 = WebAssembly.Module;
new t69(v201);
