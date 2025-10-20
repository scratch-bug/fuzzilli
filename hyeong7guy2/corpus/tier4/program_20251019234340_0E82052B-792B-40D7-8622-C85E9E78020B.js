function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    %OptimizeFunctionOnNextCall(F0);
    "0xh00000000" >>> "0xh00000000";
}
const v6 = new F0(F0, F0);
const v7 = new F0(v6, v6);
new F0(v7, F0);
