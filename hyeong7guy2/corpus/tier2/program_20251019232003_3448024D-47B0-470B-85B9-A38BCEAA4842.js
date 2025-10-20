const v0 = [];
function f1() {
    return v0;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.a = a5;
}
new F3(v0);
const v7 = class {
    set b(a9) {
        super.e >>>= 1024;
    }
    set c(a11) {
    }
}
v7.d = v7;
const v12 = new v7();
v12.c = v12;
new v7();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = this?.__defineGetter__;
    try { new v18(1024, 1024); } catch (e) {}
    this.g = a16;
}
new F14(v7, 1024);
new F14(1024, F14);
function f23() {
    return 1024;
}
const v25 = new Date();
try { v25.getDay(); } catch (e) {}
function f27(a28, a29, a30) {
    new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    WebAssembly.Module;
    const v84 = %WasmStruct();
    const v85 = %WasmArray();
    const v112 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    WebAssembly.compile(v112);
}
f27.call();
const v118 = new Worker(f27, { type: "function" });
v118.getMessage();
