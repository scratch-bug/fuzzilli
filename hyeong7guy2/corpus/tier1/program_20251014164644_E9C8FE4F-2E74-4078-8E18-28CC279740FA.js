function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = f5[4];
            const v9 = v7 | 7;
            let v10 = -1098098658;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                a17++;
                this.e = a17;
            }
            const v19 = new F14("2147483647", -3612);
            v19.c = v19;
            new F14(v7, F0);
            let v21 = 30349n;
            ({"b":v21,"e":v10,...Int32Array} = v19);
            return v9;
        }
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    f4();
}
const v24 = new F0();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
