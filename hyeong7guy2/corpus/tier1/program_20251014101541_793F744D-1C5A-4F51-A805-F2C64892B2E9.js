function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            Int32Array.a = Int32Array;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a14++;
                this.e = a14;
            }
            F11.caller;
            const v17 = new F11("2147483647", -3612);
            new F11();
            let v19 = 30349n;
            ({"b":v19,"e":v7,...Int32Array} = v17);
        }
        f5();
        f5(a2);
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
