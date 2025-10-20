class C1 {
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        const v10 = WebAssembly.compileStreaming();
        function f11() {
            function f12(a13) {
                a13(C1, a13);
            }
            f12[Symbol.species] = f12;
            return f12;
        }
        function f16(a17) {
        }
        const v19 = ~-48775;
        try {
            const v54 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
            function f55(a56) {
                return v19;
            }
            Object.defineProperty(v54, "valueOf", { writable: true, value: f55 });
            v54[31] = v54;
            const t26 = WebAssembly.Module;
            new t26(v54);
        } catch(e59) {
        }
        Object.defineProperty(v10, "constructor", { configurable: true, get: f11, set: f16 });
        v10.then();
    }
}
new v5();
