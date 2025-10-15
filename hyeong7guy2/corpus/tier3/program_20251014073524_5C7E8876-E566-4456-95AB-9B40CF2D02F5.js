function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [1073741824,3060,257,64667,0,536870888,-2147483647,-11,-1];
let v5 = 77;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        class C14 {
        }
        [v5,...F0] = v4;
        C14.h = C14;
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F15();
        return a8;
    }
    f10();
    %OptimizeFunctionOnNextCall(f10);
}
new F6(F0, F6);
new F6();
new F6();
