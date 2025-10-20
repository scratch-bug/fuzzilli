function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v9 = -1098098658;
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a15++;
            this.e = a15;
        }
        const v17 = new F12("2147483647", -3612);
        new F12(F12, Int32Array);
        let v19 = 30349n;
        ({"b":v19,"e":v9,...Int32Array} = v17);
        eval("2147483647");
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0();
new F0(v23, v23);
new F0(F0, F0);
