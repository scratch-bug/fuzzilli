const v3 = class {
    static {
        new Float64Array(1255);
    }
}
function f8(a9) {
    a9();
    return a9;
}
const v46 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const wasm_code = v46;
const t11 = WebAssembly.Module;
const v50 = new t11(wasm_code);
function f51() {
    return 2;
}
const v52 = { f: f51 };
const v53 = { m: v52 };
const t18 = WebAssembly.Instance;
const v55 = new t18(v50, v53);
const instance = v55;
instance.exports.main;
for (let i60 = 0; i60 < 20000; i60++) {
}
const v67 = {};
v67.defineProperty = Symbol;
function f69() {
}
f69[Symbol.toPrimitive] = f51;
const v72 = new Proxy(f69, v67);
v72[Symbol.toPrimitive] = f8;
v72.prototype = v72;
