const v2 = new Uint32Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = v2[2];
            v10 > v10;
            return a9;
        }
        const t9 = f8(f8);
        t9();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3(v2, F3);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
function f20(a21, a22, a23) {
    return a23;
}
const v27 = new Worker(f20, { type: "function" });
try { v27.postMessage(); } catch (e) {}
