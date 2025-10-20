function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v30 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,4,4,6,112,0,0]);
    const v32 = WebAssembly.Module;
    try { new v32(v30); } catch (e) {}
}
new F1();
