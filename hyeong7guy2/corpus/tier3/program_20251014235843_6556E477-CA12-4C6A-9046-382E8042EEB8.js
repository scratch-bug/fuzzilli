function f0() {
    let v20 = 4;
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
    }
    ({"g":F22,"length":v20,} = "object");
    let v30 = 0;
    v30--;
    const v33 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,v20,4,1,112,0,v30]);
    const t9 = WebAssembly.Module;
    new t9(v33);
    return F22;
}
try { f0(); } catch (e) {}
