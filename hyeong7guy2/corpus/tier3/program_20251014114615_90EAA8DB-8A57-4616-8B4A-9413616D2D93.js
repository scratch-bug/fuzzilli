function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    ([a6]).at(F0);
    %OptimizeFunctionOnNextCall(F4);
}
new F4(F0, F4);
new F4(F0, F0);
new F4();
