const v0 = class {
}
function f1(a2) {
    return a2;
}
const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const wasm_code = v38;
const t7 = WebAssembly.Module;
const v42 = new t7(wasm_code);
function f43() {
}
const v44 = { f: f43 };
const v45 = { m: v44 };
const t13 = WebAssembly.Instance;
const v47 = new t13(v42, v45);
const instance = v47;
const v50 = instance.exports.main;
for (let i52 = 0; i52 < 20000; i52++) {
    f1(v50);
}
const v60 = {};
v60.defineProperty = Symbol;
function f62() {
}
function f63(a64) {
    const v65 = {};
}
Object.defineProperty(f62, Symbol.toPrimitive, { configurable: true, enumerable: true, set: f63 });
const v68 = new Proxy(f62, v60);
v68[Symbol.toPrimitive] = f1;
v68.prototype = v68;
