Symbol.iterator;
class C2 {
    set c(a4) {
    }
}
class C24 {
}
const v25 = class {
}
const v26 = class {
}
const v30 = {};
v30.f = v30;
const v31 = {};
v31.f = v31;
function f33() {
    [456.6273520076486,4.0,-7.944749415305164e+307];
    class C36 {
    }
    for (let v38 = 0; v38 < 10; v38++) {
        const v40 = v38 < 20000;
        v40 || v40;
        v38++;
    }
}
f33();
const v64 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,9,1,3,105,109,112,1,102,0,0,7,9,1,5,101,120,112,95,102,0,0]);
const wasm_code = v64;
function f66() {
}
const v67 = { f: f66 };
const v68 = { imp: v67 };
const t31 = WebAssembly.Module;
const v71 = new t31(wasm_code);
const t34 = WebAssembly.Instance;
const v73 = new t34(v71, v68);
const instance = v73;
const f = instance.exports.exp_f;
for (let i79 = 0; i79; ++i79) {
    f();
}
