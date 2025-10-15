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
            const v16 = {};
            let v17 = 10;
            for (let v18 = 0; v18 < 5; v18++) {
                v17 = v18;
            }
            const v19 = new F11("2147483647", -3612);
            v19.length;
            new F11();
            let v22 = 30349n;
            ({"b":v22,"e":v7,...Int32Array} = v19);
            eval();
            return v22;
        }
        f5(a3);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0(F0, F0);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
