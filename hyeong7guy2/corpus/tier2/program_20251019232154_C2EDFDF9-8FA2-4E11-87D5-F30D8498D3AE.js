function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                const v7 = class extends a3 {
                }
                `-63824${v7}symbol`;
            } catch(e9) {
            }
            return a3;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0();
class C11 {
    static [v10](a13, a14, a15) {
    }
    static [v10](a17, a18, a19) {
    }
}
