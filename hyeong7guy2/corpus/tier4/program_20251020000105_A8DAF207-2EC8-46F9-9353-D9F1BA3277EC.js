const v0 = [1073741824,4096,806779552,52723,1073741825,1144281327,16,268435456,10000,-1];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function f9(a10, a11) {
            delete v0[6];
            for (let v13 = 0; v13 < 5; v13++) {
                gc();
                v13++;
            }
            function f17(a18) {
                return a18;
            }
            class C19 extends f17 {
            }
        }
        const v21 = new Promise(f9);
        return v21;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v23 = new F1(v0, v0);
const v24 = v23.constructor;
new v24();
new F1(v24, F1);
