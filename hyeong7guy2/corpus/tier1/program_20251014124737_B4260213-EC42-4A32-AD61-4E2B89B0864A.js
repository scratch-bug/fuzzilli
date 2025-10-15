function f0() {
}
const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        let v5 = 10;
        const v11 = {
            next() {
                v5--;
                const v9 = v5 == 0;
                return { done: v9, value: v5 };
            },
        };
        return v11;
    },
};
class C13 extends f0 {
    static o(a15) {
        new Float64Array(78);
    }
}
const v19 = new C13();
const v20 = new C13();
const v21 = new C13();
let v23 = 1073741823n;
const v24 = class extends C13 {
    static set g(a26) {
    }
    get f() {
        v3.__proto__;
        return -456994991;
    }
    static 2497;
    get a() {
        return -456994991;
    }
}
const v31 = new v24();
new v24();
new v24();
new v24();
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
}
const v40 = new F36();
v40.length = 1343066493n;
const v42 = gc();
v20.d ^= -456994991;
async function* f49(a50, a51) {
    try {
    } catch(e52) {
    }
    yield await v42;
    return a50;
}
try { f49(-456994991, -456994991); } catch (e) {}
const v84 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
v84.parameters = v40;
v23 = 1343066493n;
v40.length = 1;
v19 >> 109;
let {"h":v86,} = v21;
async function* f87(a88, a89, a90, a91) {
    yield* [await 96,1];
    return a89;
}
try { f87(0, 1, 7, 109); } catch (e) {}
const v95 = new Uint8Array(v84);
const v97 = WebAssembly.Tag;
try { new v97(v84); } catch (e) {}
const v99 = WebAssembly.Module;
let v100;
try { v100 = v99(); } catch (e) {}
function* f101(a102, a103, a104, a105) {
    yield* v84;
    yield* [0,a105,105];
    return F36;
}
try { f101(v23, v31, v86, 0); } catch (e) {}
const v108 = new v99(v95);
function f109() {
    const v117 = {
        valueOf() {
            delete this?.c;
            for (let [v113,v114,v115,...v116] of v100) {
            }
            return 0;
        },
    };
}
const v118 = { f: f109 };
const v119 = { m: v118 };
const t92 = WebAssembly.Instance;
const v121 = new t92(v108, v119);
v121.exports.main;
