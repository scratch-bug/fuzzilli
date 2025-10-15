function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = new F9();
            const v14 = v13.e;
            try { v14(); } catch (e) {}
            let v16 = 30349n;
            v16 ^ v16;
            ({"b":v16,"e":v7,...Int32Array} = v13);
            const v19 = eval();
            v19 ?? v19;
        }
        f5();
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0(F0, F0);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
