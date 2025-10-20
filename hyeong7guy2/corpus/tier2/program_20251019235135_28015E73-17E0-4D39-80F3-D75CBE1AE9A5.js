let v0 = 2453;
const v1 = v0--;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const v41 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        function f42(a43) {
            return v0;
        }
        Object.defineProperty(v41, "valueOf", { writable: true, value: f42 });
        v41[31] = v41;
        const t11 = WebAssembly.Module;
        new t11(v41);
    } catch(e46) {
    }
}
new F2(v1, v0);
