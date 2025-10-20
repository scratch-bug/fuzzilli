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
            this[4] | 7;
            const v19 = new F11("2147483647", -3612);
            const v20 = new F11();
            v20.e;
            let v22 = arguments;
            ({"b":v22,"e":v7,...Int32Array} = v19);
            return 7;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0();
class C26 {
    static [v25](a28, a29, a30) {
    }
}
