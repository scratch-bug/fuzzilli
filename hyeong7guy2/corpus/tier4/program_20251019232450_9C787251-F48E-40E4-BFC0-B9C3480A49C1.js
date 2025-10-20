function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = [0.1746662937718283,0.7692386710021542,2.2250738585072014e-308,1000.0,-709433.7056762828,107.01405293508492,-5.103917950867483e+307];
    class C4 extends Float64Array {
    }
    const v5 = new C4();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12, a13) {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                function F20(a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                    ({"byteOffset":v2,"d":a23,"length":a11,} = v5);
                }
                new F20(F0, this);
            }
            new F14(this, this, a13, C4);
            return a12;
        }
        f10();
        f10();
        %OptimizeFunctionOnNextCall(f10);
        f10(f10, C4, F0);
    }
    new F6();
}
new F0();
