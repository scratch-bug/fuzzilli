function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v28 = new Uint8Array([512,97,115,109,1,0,0,0,5,15,4,512,0,94,96,0,268435456,2478,512,96,512,107,9007199254740992,1,127]);
    const v30 = WebAssembly.Module;
    try { new v30(v28); } catch (e) {}
}
new F1();
