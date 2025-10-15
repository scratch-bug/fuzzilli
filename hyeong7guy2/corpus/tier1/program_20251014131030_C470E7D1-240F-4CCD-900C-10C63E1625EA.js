function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        for (let v8 = 0; v8 < 5; v8++) {
            const t4 = 0.5999524236364984;
            t4[-65537n] <<= v8;
        }
        const v11 = class {
        }
        function f12() {
            return 0.5999524236364984;
        }
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            this(a16, f12);
        }
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            a23++;
            this.e = a23;
        }
        const v25 = new F20("2147483647", -3612);
        v25.e;
        new F20(v25, f4);
        return v11;
    }
    f4();
    f4(f4);
    %OptimizeMaglevOnNextCall(f4);
    f4(a3);
}
new F0(F0, F0);
