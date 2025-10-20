function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            const v12 = v11.constructor;
            function f13() {
                return a2;
            }
            const v14 = class extends f13 {
                static [F7](a16, a17, a18, a19) {
                }
            }
            new v12();
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
