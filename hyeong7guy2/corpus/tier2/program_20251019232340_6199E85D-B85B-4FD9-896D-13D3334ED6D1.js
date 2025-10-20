let v0 = 131;
v0++;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8) {
    try {
        const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        function f45(a46) {
            return v0;
        }
        Object.defineProperty(v44, "valueOf", { writable: true, value: f45 });
        v44[31] = v44;
        const t13 = WebAssembly.Module;
        new t13(v44);
    } catch(e49) {
    }
}
F2[Symbol.toPrimitive] = f7;
--F2;
