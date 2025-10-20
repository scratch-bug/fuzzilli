function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new ArrayBuffer(8, { maxByteLength: 129 });
    const v10 = new Uint32Array(v8);
    function f11() {
        function f12(a13) {
            for (const v14 in v10) {
                break;
            }
            eval();
        }
        f12(F0);
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v19 = new F0(F0, F0);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
