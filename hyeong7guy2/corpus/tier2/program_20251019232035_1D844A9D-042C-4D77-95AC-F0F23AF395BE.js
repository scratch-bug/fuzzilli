let v0 = 34509;
v0--;
const v2 = ~v0;
try {
    const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,1]);
    function f39(a40) {
        return v2;
    }
    Object.defineProperty(v38, "valueOf", { writable: true, value: f39 });
    v38[31] = v38;
    const t10 = WebAssembly.Module;
    new t10(v38);
} catch(e43) {
}
