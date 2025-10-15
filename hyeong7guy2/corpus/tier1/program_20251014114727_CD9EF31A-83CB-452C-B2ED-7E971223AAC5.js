function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        for (let v8 = 0; v8 < 5; v8++) {
            const t4 = 0.5999524236364984;
            t4[-65537n] <<= v8;
        }
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a14++;
            this.e = a14;
        }
        const v16 = new F11("2147483647", -3612);
        v16.e;
        new F11();
        return F0;
    }
    f4(this);
    f4(F0);
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
new F0();
