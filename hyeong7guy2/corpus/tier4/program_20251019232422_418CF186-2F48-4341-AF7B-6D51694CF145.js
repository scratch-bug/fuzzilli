function f2() {
    let v30 = 10;
    v30++;
    const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,v30,4,1,2,0,11]);
    const t4 = WebAssembly.Module;
    new t4(v38);
    return 1;
}
Float32Array.constructor = f2;
const v41 = Float32Array.constructor;
try { v41(); } catch (e) {}
