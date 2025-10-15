function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v9 = -3612;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a13++;
                this.e = a13;
            }
            const v15 = new F10("2147483647", v9);
            v15.toString(f5);
            v15.b = "2147483647";
            new F10();
            let v18 = 30349n;
            ({"b":v18,"e":v9,...Int32Array} = v15);
        }
        f5(F0);
        f5();
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
