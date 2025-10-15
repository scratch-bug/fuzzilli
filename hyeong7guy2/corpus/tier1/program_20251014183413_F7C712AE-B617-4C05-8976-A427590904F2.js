function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            const v10 = ("2147483647").charAt(v8);
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v15 = 30349n;
            ({"b":v15,"e":v8,...Int32Array} = F11);
            const v17 = this.TypeError;
            try { v17(F1, v8, F1, v17); } catch (e) {}
            const v19 = eval(v10);
            const v20 = v19 ?? v19;
            v20 ?? v20;
        }
        f6();
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1(F1, Int32Array);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
