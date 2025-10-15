function f1(a2, a3, a4) {
    const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t2 = WebAssembly.Module;
    new t2(v40);
    new Uint32Array(536870912);
    return 109;
}
const v49 = { type: "function" };
Object.defineProperty(v49, "flushDenormals", { writable: true, value: WeakSet });
const v50 = new Worker(f1, v49);
v50.getMessage();
