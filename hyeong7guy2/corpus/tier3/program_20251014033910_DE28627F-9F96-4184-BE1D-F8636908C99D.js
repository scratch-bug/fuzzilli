function f0() {
    let v29 = 3;
    v29--;
    const v52 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,4,4,1,112,0,0,7,22,2,v29,116,97,103,4,0,0,8,116,104,114,111,119,95,102,110,0,0,10,6,1]);
    const t4 = WebAssembly.Module;
    new t4(v52);
    return 2;
}
try { f0(); } catch (e) {}
