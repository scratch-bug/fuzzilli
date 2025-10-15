for (let v1 = 0; v1 < 5; v1++) {
    const v18 = new Uint8Array([0,97,115,109,1,0,0,0,8,6,1,96,1,v1,1,110]);
    const v20 = WebAssembly.Module;
    try { new v20(v18); } catch (e) {}
}
