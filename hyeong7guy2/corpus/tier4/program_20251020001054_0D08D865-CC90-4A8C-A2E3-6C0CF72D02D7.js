const v0 = [-857793070,-2,-128,-2147483647,792387527,9007199254740991,1073741824,2147483647];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = this;
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12, a13) {
            [v2] = v0;
            for (let i15 = 10, i16 = 10; i16; i16--) {
            }
            return a12;
        }
        f11();
        %PrepareFunctionForOptimization(f11);
        %OptimizeMaglevOnNextCall(f11);
        f11();
    }
    new F5();
}
new F1();
