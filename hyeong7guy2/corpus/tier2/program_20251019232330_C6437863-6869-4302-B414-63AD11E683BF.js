function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        function f3(a4) {
            f3[4] | 7;
            eval(a4);
            const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const v47 = WebAssembly.Module;
            const v48 = new v47(v45);
            v47.imports(v48);
            return 4;
        }
        f3(f3(F0));
        %OptimizeMaglevOnNextCall(f3);
        return f3;
    }
    Object.defineProperty(this, "toString", { get: f2 });
}
const v52 = new F0();
class C53 {
    static [v52](a55, a56, a57) {
    }
}
