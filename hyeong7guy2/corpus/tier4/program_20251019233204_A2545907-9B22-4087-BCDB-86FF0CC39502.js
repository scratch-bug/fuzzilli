function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        function f41(a42) {
            return a3;
        }
        v40[Symbol.toPrimitive] = f41;
        v40[31] = v40;
        const t9 = WebAssembly.Module;
        new t9(v40);
    } catch(e47) {
    }
}
new F1(2453);
