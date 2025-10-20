function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            return a4;
        }
        try {
            const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
            function f44(a45) {
                return 129;
            }
            Object.defineProperty(v43, "valueOf", { writable: true, value: f44 });
            v43[31] = v43;
            const t13 = WebAssembly.Module;
            new t13(v43);
        } catch(e48) {
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v49 = new F1();
class C50 {
    static [v49](a52, a53, a54) {
    }
}
