function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a14++;
                this.e = a14;
            }
            const v16 = new F11("includes", -3612);
            const t11 = v16?.constructor;
            new t11(f5, Int32Array);
            let v19 = 30349n;
            a4++;
            ({"b":v19,"e":v8,...Int32Array} = v16);
        }
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
    f5();
}
const v23 = new F1();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
