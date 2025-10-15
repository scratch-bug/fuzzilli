function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = [0.1746662937718283,0.7692386710021542,2.2250738585072014e-308,1000.0,-709433.7056762828,107.01405293508492,-5.103917950867483e+307];
    class C4 extends Float64Array {
        get d() {
            return this;
        }
    }
    const v6 = new C4();
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12, a13, a14) {
            function F15(a17, a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                function F21(a23, a24) {
                    if (!new.target) { throw 'must be called with new'; }
                    ({"byteOffset":v2,"d":a24,"length":a12,} = v6);
                    a24[Float64Array] *= a23;
                }
                new F21(this, C4);
            }
            new F15(a10, F15, F0, f11);
            return F0;
        }
        f11(a10, v2, this);
        %OptimizeFunctionOnNextCall(f11);
    }
    new F7();
    new F7(v6, this);
}
new F0();
new F0();
