function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [30735,268435456,-576196098,-128];
            const v10 = new Proxy(v7, {});
            Object.create(v10)[0];
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
    static [v14](a21, a22, a23) {
    }
}
