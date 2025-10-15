const v0 = {};
const v3 = new Uint32Array(536870912);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v11 = v3[599];
            new Proxy(v0, {});
            return v11;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v17 = new F4(F4, Uint32Array);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
