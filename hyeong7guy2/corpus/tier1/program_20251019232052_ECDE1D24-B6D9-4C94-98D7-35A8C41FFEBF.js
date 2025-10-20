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
            const v19 = ([this,this,this,this])[4] | 7;
            const v20 = new F11("2147483647", -3612);
            const v21 = new F11();
            try { v21.constructor(v21); } catch (e) {}
            arguments[2];
            let v25 = 30349n;
            ({"b":v25,"e":v7,...Int32Array} = v20);
            return v19;
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
