function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = new Uint8Array([0,97,115,109,1,0,0,0,1,-9007199254740990,4,95]);
    const v20 = WebAssembly.Module;
    try { new v20(v18); } catch (e) {}
}
new F1();
