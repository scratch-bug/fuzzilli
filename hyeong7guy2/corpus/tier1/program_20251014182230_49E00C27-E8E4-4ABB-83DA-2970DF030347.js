function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = a6 === a6;
            v8 || v8;
            const v10 = Temporal.PlainDateTime;
            let v11;
            try { v11 = v10(a2, a6, a2, a3, a2, a3, a2); } catch (e) {}
            const v12 = v11 ?? v11;
            v12 ?? v12;
            eval(a2);
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
