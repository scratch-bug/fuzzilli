function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                const v7 = class extends a3 {
                    static get e() {
                        super[f4];
                    }
                }
                `-63824`;
            } catch(e11) {
            }
            return a6;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
class C13 {
    static [v12](a15, a16, a17) {
    }
    static [v12](a19, a20, a21) {
    }
}
