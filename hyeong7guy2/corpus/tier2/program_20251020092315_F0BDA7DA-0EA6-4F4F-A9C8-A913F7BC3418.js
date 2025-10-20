const v2 = new Float32Array(4096);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            for (let v11 = 0; v11 < 4; v11++) {
                v2[v11] *= 145;
            }
        }
        f9(f9());
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v14 = new F4();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
