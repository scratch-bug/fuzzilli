let v0 = 3156;
class C1 {
}
function f2(a3, a4) {
    let v5 = [-1e-15,-1000.0,-2.2250738585072014e-308,0.27724171973070033,-158786.79002396786];
    function f6() {
        try {
            v0++;
            const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
            function f44(a45) {
                return v0;
            }
            Object.defineProperty(v43, "valueOf", { writable: true, value: f44 });
            v43[31] = v43;
            const t14 = WebAssembly.Module;
            new t14(v43);
        } catch(e48) {
        }
        return a4;
    }
    v5.valueOf = f6;
    v5 ^= v5;
    return C1;
}
Object.defineProperty(C1, "constructor", { writable: true, enumerable: true, value: f2 });
const t25 = C1.constructor;
t25();
