let v0 = 129;
v0++;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            return a8;
        }
        try {
            const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
            function f45(a46) {
                return v0;
            }
            Object.defineProperty(v44, "valueOf", { writable: true, value: f45 });
            v44[31] = v44;
            const t15 = WebAssembly.Module;
            new t15(v44);
        } catch(e49) {
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v50 = new F2(v0, F2);
class C51 {
    static [v50](a53, a54, a55) {
    }
}
