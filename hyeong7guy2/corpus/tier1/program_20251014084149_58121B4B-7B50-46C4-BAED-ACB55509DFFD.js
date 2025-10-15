new Int16Array(1000);
const v6 = [-11758,1,-4294967297,2,13,-520523735,268435440,46482,35290];
[-65535,v6];
const v10 = ([false,1000]).lastIndexOf;
function* f11(a12, a13) {
    const v14 = [Int16Array,v10,v6,a12];
    yield* v14;
    return v14;
}
try { f11(Int16Array, 1000); } catch (e) {}
let v19 = 1073741825;
for (let i21 = 0;
    i21 < 20000;
    (() => {
        ~i21;
        try {
        } catch(e26) {
            const v27 = {};
            function F28(a30, a31, a32) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F28();
        }
    })()) {
    ++i21;
}
++v19;
const v37 = class {
    static #p(a39) {
        Math.atan2(a39, a39);
        ~a39;
    }
}
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
}
const v47 = new F43(v37, v37);
v47?.constructor;
new BigUint64Array(v19);
Symbol();
if (v10) {
}
const v53 = new Int8Array();
function f54(a55) {
    const v58 = { execution: "async" };
    for (let i60 = 0; i60 < 25000; ++i60) {
        ([i60,i60]).push(1.1);
    }
    gc(v58);
    return a55;
}
Object.defineProperty(v53, "valueOf", { configurable: true, enumerable: true, value: f54 });
