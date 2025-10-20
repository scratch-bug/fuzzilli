function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const v42 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        function f43(a44) {
            return -1349010564;
        }
        Object.defineProperty(v42, "valueOf", { writable: true, value: f43 });
        v42[31] = v42;
        const t9 = WebAssembly.Module;
        new t9(v42);
    } catch(e47) {
    }
}
new F1();
