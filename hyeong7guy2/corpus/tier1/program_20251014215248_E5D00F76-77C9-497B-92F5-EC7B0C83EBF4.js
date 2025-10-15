function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = a6 === f4;
            const v9 = v8 || v8;
            const v10 = Temporal.PlainDateTime;
            let v11;
            try { v11 = v10(v9); } catch (e) {}
            v11 ?? v11;
            eval();
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
