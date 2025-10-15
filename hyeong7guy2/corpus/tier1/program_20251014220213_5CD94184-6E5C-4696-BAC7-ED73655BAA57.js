function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            let v9 = -3612;
            const v10 = v9++;
            const v11 = ~v10;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v16 = { value: v11 };
            let v17 = 30349n;
            ({"b":v17,"e":v7,...Int32Array} = F12);
            return eval(v10);
        }
        f5(F0);
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
