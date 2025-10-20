function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const t4 = ("2147483647").constructor;
            const v9 = t4(a6);
            let v10;
            try { v10 = v9(); } catch (e) {}
            v9[444];
            return v10;
        }
        f5(a2);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
