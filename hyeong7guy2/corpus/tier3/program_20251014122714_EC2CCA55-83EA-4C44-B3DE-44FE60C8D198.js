function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v9 = -1098098658;
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            a13++;
            this.e = a13;
        }
        const v15 = new F10(a5, F0);
        let v16 = 0;
        for (let i = 0; i < 5; i++) {
            v16++;
        }
        let v18 = 30349n;
        ({"b":v18,"e":v9,...Int32Array} = v15);
        return eval(v9);
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
