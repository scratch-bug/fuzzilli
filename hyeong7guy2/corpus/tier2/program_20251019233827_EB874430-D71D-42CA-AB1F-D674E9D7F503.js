function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                let v35 = 10;
                v35++;
                let v40 = 0;
                v40--;
                const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,v35,4,953268976,2,v40,11]);
                const t10 = WebAssembly.Module;
                new t10(v44);
            } catch(e47) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v48 = new F0();
class C49 {
    static [v48](a51, a52, a53) {
    }
}
for (let i56 = 0, i57 = 10; i57; i57--) {
}
