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
                new F20();
            }
            new F14(F0, F14, F14, F0);
            return a8;
        }
        f10(v2, F0, a9);
        %OptimizeFunctionOnNextCall(f10);
    }
    new F6();
    new F6(C4, C4);
}
new F0();
new F0();
