[498761890,7,268435440];
new Int32Array(256);
[9007199254740991,-349026832];
const v7 = Symbol.iterator;
const v16 = {
    [v7]() {
        let v9 = 10;
        const v15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                return { done: v13, value: v9 };
            },
        };
        return v15;
    },
};
new Int16Array(27);
class C21 {
}
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
}
new F26();
function f34() {
}
class C35 {
    2 = f34;
}
const v36 = new C35();
const v37 = v36[2];
new C35();
const v41 = /NII/uyg.constructor;
!"w";
v37();
new v41();
try { new BigUint64Array(318610984); } catch (e) {}
new BigUint64Array();
function f57() {
}
function f58() {
    function f59() {
        function F60(a62, a63) {
            if (!new.target) { throw 'must be called with new'; }
            const t47 = globalThis.performance.measureMemory;
            t47();
        }
        new F60();
        for (let v69 = 0; v69 < 5; v69++) {
            v69++;
        }
        return { done: WeakMap };
    }
    return { next: f59 };
}
const v73 = Symbol.iterator;
const v74 = { [v73]: f58 };
const v114 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v156 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f157() {
    const v160 = await WebAssembly.compile(v114);
    const v162 = await WebAssembly.compile(v156);
    const t65 = WebAssembly.Instance;
    const v164 = new t65(v160);
    const v165 = WebAssembly.Instance;
    const v167 = v164.exports.exp;
    const v168 = { imp: v167 };
    const v170 = new v165(v162, { env: v168 });
    const t71 = WebAssembly.promising(v170.exports.re_exp);
    t71();
}
const v208 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
const t75 = WebAssembly.Module;
new t75(v208);
