const v2 = new Uint32Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = v2[599];
            const v11 = {};
            try { v11(); } catch (e) {}
            return v10;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v15 = new F3(v2, Uint32Array);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
