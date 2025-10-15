function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = new F9();
            v13.e = Int32Array;
            new F9();
            v13.length = 5.0;
            let v16 = 30349n;
            const v17 = (a18, a19, a20) => {
                return f5;
            };
            ({"b":v16,"e":v7,...Int32Array} = v13);
            eval(a6);
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
