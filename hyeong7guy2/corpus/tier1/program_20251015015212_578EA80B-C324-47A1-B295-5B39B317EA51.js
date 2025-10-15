function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = (3)[4];
            const v10 = v8 | 7;
            v10 - v10;
            const v13 = eval.call;
            try { v13(F0, a6, f5); } catch (e) {}
            const v15 = eval.call;
            let v16;
            try { v16 = v15(v15, F0, v8, f4, eval); } catch (e) {}
            const v17 = eval(v16);
            return v17 ?? v17;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
