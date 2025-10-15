function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = ([f5,f5,f5,f5])[4] | 7;
            function f11(a12, a13, a14) {
                return f11;
            }
            let v15 = -1098098658;
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                a22++;
                this.e = a22;
            }
            const v24 = new F19("2147483647", -3612);
            new F19();
            let v26 = 30349n;
            ({"b":v26,"e":v15,...Int32Array} = v24);
            return v10;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    f4();
}
const v29 = new F0(F0, F0);
class C30 {
    static [v29](a32, a33, a34) {
    }
}
