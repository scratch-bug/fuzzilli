const v0 = /[Mabc+?]/yv;
function f2(a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { F5.call("string"); } catch (e) {}
    const v10 = delete v0[1655];
    [!v10];
    return v10;
}
const v13 = f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2(v0, v13);
