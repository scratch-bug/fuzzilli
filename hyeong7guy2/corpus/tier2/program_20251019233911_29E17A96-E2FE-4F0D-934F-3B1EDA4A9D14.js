const v2 = new Uint32Array(4096);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            for (let v11 = 0; v11 < 4; v11++) {
                v2[v11] *= 145;
            }
            return a10;
        }
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v12 = new F4();
v12.toString(4096, v2, v2, v2);
class C14 {
    static [v12](a16, a17, a18) {
    }
}
