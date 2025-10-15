const v0 = [-65537,268435440,0,-6,2147483647,9007199254740990,7,-634776484,1073741824];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            try { a15.apply(a7, v0); } catch (e) {}
        }
        const v17 = new F10(a7, F1, -9007199254740992n, a3);
        try { v17.constructor(); } catch (e) {}
        return a3;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v20 = new F1();
const v21 = v20.constructor;
new v21(v21);
new v21();
