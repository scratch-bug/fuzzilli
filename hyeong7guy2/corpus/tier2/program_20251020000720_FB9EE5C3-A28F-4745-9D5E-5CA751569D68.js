const v0 = [-2147483647,536870888,-33492,48346,-2,-272698513,2147483648,257,-146670715,-12860];
class C1 {
}
const v2 = class extends C1 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        a9.fromCodePoint = f7;
        function f11(a12, a13) {
            a12.e = a12;
            try { a9.fromCodePoint(C1, a10); } catch (e) {}
        }
        new Promise(f11);
    }
    f7(F3, v2, v0);
    %OptimizeFunctionOnNextCall(f7);
}
new F3();
new F3();
new F3();
