const v2 = new Uint32Array(512);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            try { a9.constructor(); } catch (e) {}
            const v11 = v2.length;
            const v12 = { month: v11 };
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v15 = new F3(Uint32Array, F3);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
