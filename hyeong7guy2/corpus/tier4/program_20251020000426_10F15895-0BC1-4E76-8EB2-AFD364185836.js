const v0 = [0.412802920877953];
v0.length = 0;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        with (d8) {
            const v13 = test.FastCAPI;
            const v14 = new v13();
            v14.enforce_range_compare_i32("b", v13);
        }
        function F16(a18) {
            if (!new.target) { throw 'must be called with new'; }
            v0.find(f6);
        }
        new F16();
        return a8;
    }
    f6(f6, F2, v0);
    %OptimizeFunctionOnNextCall(f6);
    new Int8Array(1065172329);
}
const v25 = new F2();
new F2(v25, v25);
new F2(F2, 0);
