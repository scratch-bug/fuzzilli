const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        const v6 = {};
        function f7(a8) {
            const v9 = a8 >>> a8;
            const v10 = v0.constructor;
            const v11 = new v10(f5, v10, v6, v9);
            v11[1];
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1(v0, v0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
