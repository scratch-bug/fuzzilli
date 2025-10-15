function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9(a10) {
            let v11 = -1098098658;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                a17++;
                this.e = a17;
            }
            const v19 = new F14("2147483647", -3612);
            v19.length = v19;
            new F14(F14, F0);
            let v21 = 30349n;
            ({"b":v21,"e":v11,...Int32Array} = v19);
            eval();
            return f9;
        }
        f9(Int32Array);
        return a6;
    }
    f4(a3, this, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
