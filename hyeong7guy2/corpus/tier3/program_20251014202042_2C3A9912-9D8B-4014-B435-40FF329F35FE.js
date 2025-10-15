function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(a3, a2); } catch (e) {}
    %OptimizeFunctionOnNextCall(a3);
}
new F0(F0);
