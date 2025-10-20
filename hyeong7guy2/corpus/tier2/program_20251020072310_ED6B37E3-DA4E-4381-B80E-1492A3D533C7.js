function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                let v35 = 10;
                v35++;
                let v39 = 2;
                v39--;
                let v41 = 0;
                v41--;
                const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,v35,4,1,v39,v41,11]);
                const t12 = WebAssembly.Module;
                new t12(v45);
            } catch(e48) {
            }
            return a6;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v49 = new F0();
class C50 {
    static [v49](a52, a53, a54) {
    }
}
for (let i57 = 0, i58 = 10; i58; i58--) {
}
