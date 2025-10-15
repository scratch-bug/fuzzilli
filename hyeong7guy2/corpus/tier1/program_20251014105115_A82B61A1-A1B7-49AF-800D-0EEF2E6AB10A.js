function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v9 = {};
            const v10 = [771801917];
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                F11(v10);
            }
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                a21++;
                this.e = a21;
            }
            const v23 = new F18("2147483647", -3612);
            v23.length = a6;
            function f24() {
                return a3;
            }
            new F18();
            let v26 = 30349n;
            ({"b":v26,"e":v7,...Int32Array} = v23);
            function f28() {
                return v10;
            }
            let v29 = -10780;
            v29 **= 0;
            eval();
        }
        f5(f5);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v34 = new F0();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
