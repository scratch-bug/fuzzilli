Symbol[97] = Symbol;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = 97 in Symbol;
        v10 ^ v10;
        return F1;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v14 = new F1();
new F1(Symbol, v14);
