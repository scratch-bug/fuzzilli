const v0 = [809.0477364077874,-1e-15,-1e-15,0.6013301446374383];
let v1 = -2.2250738585072014e-308;
const v2 = v1--;
const v3 = [v2,v2];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const t8 = v3.constructor;
            const v12 = t8(a10, v0);
            try { v12.forEach(v1); } catch (e) {}
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v16 = new F4(F4, v0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
