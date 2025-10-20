for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = ("p").codePointAt(a12);
    try {
        const v50 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        function f51(a52) {
            return v14;
        }
        Object.defineProperty(v50, "valueOf", { writable: true, value: f51 });
        v50[31] = v50;
        const t12 = WebAssembly.Module;
        new t12(v50);
    } catch(e55) {
    }
}
new F9(F9, F9);
