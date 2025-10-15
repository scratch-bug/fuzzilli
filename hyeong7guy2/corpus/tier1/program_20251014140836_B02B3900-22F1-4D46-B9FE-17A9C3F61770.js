function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a14++;
                this.e = a14;
            }
            const v16 = new F11("2147483647", -3612);
            const v17 = new F11();
            v17.constructor;
            let v19 = 30349n;
            -9007199254740990 >> a2;
            ({"b":v19,"e":v7,...Int32Array} = v16);
            return v19;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
