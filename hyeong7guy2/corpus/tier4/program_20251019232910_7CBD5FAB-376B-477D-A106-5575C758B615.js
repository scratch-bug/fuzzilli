let v0 = 1;
const v1 = [10000];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            let v11 = this;
            [a15,v11,v0,a13] = v1;
        }
        new F10();
        return a4;
    }
    f6(a4, v0, v1);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
