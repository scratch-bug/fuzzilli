function f0(a1, a2, a3) {
    let v18 = 123;
    v18++;
    const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,v18,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    const t4 = WebAssembly.Module;
    const v42 = new t4(v39);
    const t6 = WebAssembly.Instance;
    const v44 = new t6(v42);
    const t8 = v44.exports.f;
    t8();
    return 1;
}
const v51 = new Worker(f0, { type: "function" });
v51.getMessage();
