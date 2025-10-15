const v0 = class {
}
function f1(a2) {
    a2();
    return a2;
}
const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t7 = WebAssembly.Module;
const v42 = new t7(v39);
function f43() {
    return 109;
}
const v44 = { f: f43 };
const v45 = { m: v44 };
const t14 = WebAssembly.Instance;
const v47 = new t14(v42, v45);
const v49 = v47.exports.main;
for (let i51 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i51 < 20000;
    })();
    i51++) {
    f1(v49);
}
new v0();
const v62 = [4096];
const v63 = {};
v63.defineProperty = 102;
v63.defineProperty = Symbol;
function f64() {
    return v63;
}
try { Reflect.construct(f64, v63, v62); } catch (e) {}
