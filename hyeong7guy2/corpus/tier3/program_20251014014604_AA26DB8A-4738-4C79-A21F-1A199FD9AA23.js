function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(a4); } catch (e) {}
    f0();
    %OptimizeFunctionOnNextCall(f0);
}
new F1();
