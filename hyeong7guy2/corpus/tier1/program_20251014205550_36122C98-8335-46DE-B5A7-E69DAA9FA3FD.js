let v0 = [0.1746662937718283,0.7692386710021542,2.2250738585072014e-308,1000.0,-709433.7056762828,107.01405293508492,-5.103917950867483e+307];
class C2 extends Float64Array {
    get d() {
        return this;
    }
}
const v4 = new C2();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                ({"byteOffset":v0,"d":a22,"length":a10,} = v4);
                a22[Float64Array] *= a21;
            }
            new F19();
        }
        new F13(a10, a12, a10, a11);
        return F13;
    }
    f9(C2, this, this);
    %OptimizeFunctionOnNextCall(f9);
}
const v26 = new F5(C2, v4);
new F5(v4, v26);
new F5();
