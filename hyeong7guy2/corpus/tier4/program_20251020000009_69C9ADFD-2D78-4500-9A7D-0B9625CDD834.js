function f0() {
    let v20 = 4;
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
    }
    ({"g":F22,"length":v20,} = "object");
    const v32 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,-256,2,1,0,v20,4,1,112,0,-814014899]);
    const t7 = WebAssembly.Module;
    new t7(v32);
    return WebAssembly;
}
try { f0(); } catch (e) {}
