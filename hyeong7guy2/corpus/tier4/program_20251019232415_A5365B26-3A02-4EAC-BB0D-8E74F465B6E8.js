function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    %OptimizeFunctionOnNextCall(F0);
    "0x100000000" >>> "0x100000000";
}
new F0(F0, F0);
const v7 = new F0(F0, F0);
new F0(v7, v7);
