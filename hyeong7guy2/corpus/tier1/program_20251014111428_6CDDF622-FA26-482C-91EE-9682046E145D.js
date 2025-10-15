function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v9 = {};
            const v10 = [771801917];
            try { v10(a3, f5, F0, f5); } catch (e) {}
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v16 = new F12(a3, v9);
            let v17 = 30349n;
            -v17;
            ({"b":v17,"e":v7,...Int32Array} = v16);
            eval(a3);
            return v7;
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
