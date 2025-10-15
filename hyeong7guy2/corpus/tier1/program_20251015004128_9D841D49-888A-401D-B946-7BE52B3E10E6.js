const v2 = new Uint32Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = class {
            }
            try { v10(); } catch (e) {}
            v2[2];
            return a9;
        }
        const t11 = f8(f8);
        t11();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v15 = new F3();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
