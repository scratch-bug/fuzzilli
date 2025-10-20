function f3() {
    let v4 = ~-36471;
    v4--;
    const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    function f41(a42) {
        return v4;
    }
    Object.defineProperty(v40, "valueOf", { writable: true, value: f41 });
    v40[31] = v40;
    const t9 = WebAssembly.Module;
    new t9(v40);
    return 11;
}
Float32Array.constructor = f3;
const v45 = Float32Array.constructor;
try { v45(); } catch (e) {}
