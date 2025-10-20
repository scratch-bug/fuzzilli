const v2 = new Uint32Array(1315159566);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    eval();
    function f9() {
        function f10(a11) {
            for (let v12 = 0; v12 < 5; v12++) {
                v2[v12] = v12;
            }
        }
        f10(F3);
        f10(eval);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v15 = new F3(Uint32Array, v2);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
