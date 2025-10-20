const v2 = new Uint32Array(512);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            try { a9.constructor(); } catch (e) {}
            const v11 = new Uint32Array();
            const v12 = v2.length;
            v11.includes(v12);
            const v14 = { month: v12 };
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
