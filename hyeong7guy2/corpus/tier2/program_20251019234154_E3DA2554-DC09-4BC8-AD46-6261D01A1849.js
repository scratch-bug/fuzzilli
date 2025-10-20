function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                const v10 = new SharedArrayBuffer(7);
                const v12 = new DataView(v10);
                return v12.setInt16();
            }
            ({ construct: f7 }).construct(a2, this, f5);
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
    static [v18](a25, a26, a27) {
    }
}
