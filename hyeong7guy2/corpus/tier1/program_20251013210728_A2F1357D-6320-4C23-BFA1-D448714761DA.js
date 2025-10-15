function f0() {
    const v51 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,4,4,1,112,0,0,7,22,2,3,116,97,103,4,0,0,8,116,104,114,111,119,95,102,110,0,0,10,6,1]);
    const v70 = new Uint8Array([0,97,115,109,1,0,0,0,1,7,1,96,1,127,0,2,33]);
    const v72 = WebAssembly.Module;
    let v73;
    try { v73 = new v72(v51); } catch (e) {}
    const v74 = { lib: v73 };
    const v75 = WebAssembly.Module;
    let v76;
    try { v76 = new v75(v70); } catch (e) {}
    for (let v77 = 0; v77 < 5; v77++) {
        try {
            try { WebAssembly(116, v77, v77, v76, 109); } catch (e) {}
        } catch(e79) {
        }
    }
    return f0;
}
f0();
