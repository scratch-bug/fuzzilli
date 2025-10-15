function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v32 = new Uint8Array([0,97,115,109,1,0,0,0,5,15,4,95,0,94,96,0,268435456,2478,0,96,1,107,9007199254740992,1,127]);
    const v34 = WebAssembly.Module;
    try { new v34(v32); } catch (e) {}
}
new F3();
