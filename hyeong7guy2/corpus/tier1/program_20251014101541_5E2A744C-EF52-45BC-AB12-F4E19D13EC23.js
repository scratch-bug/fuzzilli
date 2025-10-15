function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = this;
                a14++;
                this.e = a14;
            }
            const v16 = new F11("2147483647", -3612);
            new F11();
            let v18 = 30349n;
            ({"b":v18,"e":v7,...Int32Array} = v16);
        }
        f5(F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0(F0, F0);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
