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
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = v7;
            }
            v17.constructor;
            let v25 = 30349n;
            -9007199254740990 >> a2;
            ({"b":v25,"e":v7,...Int32Array} = v16);
            return a6;
        }
        f5(f4);
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0();
class C31 {
    static [v30](a33, a34, a35) {
    }
}
