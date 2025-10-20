function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Float32Array(2439);
            const v10 = v9[1096];
            const v13 = new Uint32Array();
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                v13[2] &= 9007199254740992;
            }
            v9[1096];
            return v10;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1(Float32Array, Float32Array);
class C20 {
    static [v19](a22, a23, a24) {
    }
    static [v19](a26, a27, a28) {
    }
}
