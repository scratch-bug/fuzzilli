function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        try {
            let v19 = 101;
            v19--;
            function f21() {
                return 109;
            }
            WebAssembly.instantiateStreaming().catch(f21);
            const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
            function f48(a49) {
                return v19;
            }
            Object.defineProperty(v47, "valueOf", { writable: true, value: f48 });
            v47[31] = v47;
            const t18 = WebAssembly.Module;
            new t18(v47);
        } catch(e52) {
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v53 = new F0(F0, F0);
class C54 {
    static [v53](a56, a57, a58) {
    }
}
