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
            const v17 = /c[\cZ]kV(?:a+)?/imsy;
            function f18(a19) {
                function F20(a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                v17 !== F20;
                return f5;
            }
            v16.length = v16;
            new F11();
            let v26 = 30349n;
            ({"b":v26,"e":v7,...Int32Array} = v16);
            eval();
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v31 = new F0(F0, F0);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
