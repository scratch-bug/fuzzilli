function f1() {
    return f1;
}
function f2() {
    return 256;
}
function f3(a4) {
    try {
        let v25 = 7;
        v25--;
        let v27 = 5;
        v27--;
        let v29 = 1;
        v29--;
        v29--;
        const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,v25,v27,v29,1,102,0]);
        const t16 = WebAssembly.Module;
        new t16(v36);
    } catch(e40) {
    }
    return a4;
}
Object.defineProperty(f1, "a", { configurable: true, enumerable: true, get: f2, set: f3 });
const v41 = class extends f1 {
}
v41.a = 256;
