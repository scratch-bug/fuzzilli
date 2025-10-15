function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9(a10) {
            return parseInt("Ee", 16);
        }
        ("Ee").match().map(f9);
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
new F0(v17, F0);
new F0(v17, F0);
