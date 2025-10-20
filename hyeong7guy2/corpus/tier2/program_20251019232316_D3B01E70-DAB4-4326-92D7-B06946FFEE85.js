function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f6(a7) {
    try {
        const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        function f44(a45) {
            return 131;
        }
        Object.defineProperty(v43, "valueOf", { writable: true, value: f44 });
        v43[31] = v43;
        const t11 = WebAssembly.Module;
        new t11(v43);
    } catch(e48) {
    }
}
const v50 = Symbol.toPrimitive;
F1[v50] = f6;
function F51(a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    function F56(a58, a59, a60, a61) {
        if (!new.target) { throw 'must be called with new'; }
        function f62() {
            return a61;
        }
        function f63(a64) {
            --F1;
            return Symbol;
        }
        Object.defineProperty(this, "e", { get: f62, set: f63 });
        this.e = -1;
    }
    new F56();
}
new F51(v50, f6);
