function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            a6 === a6;
            const v9 = Temporal.PlainDateTime;
            let v10;
            try { v10 = v9(a6, a6, a3, a6, a6, a6); } catch (e) {}
            eval(v10);
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
