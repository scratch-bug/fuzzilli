function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C9 {
            }
            let v10;
            try { v10 = new C9(F7, ...F7); } catch (e) {}
            v10 ?? v10;
        }
        f5();
        f5();
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
