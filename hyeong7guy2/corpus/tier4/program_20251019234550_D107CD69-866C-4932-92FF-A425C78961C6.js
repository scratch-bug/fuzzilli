function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8) {
        ("🙌🏿")[2];
        return this;
    }
    %OptimizeFunctionOnNextCall(f6);
    const v11 = f6(a4, F0);
    try { v11.decodeURI(a5); } catch (e) {}
}
new F0(F0, F0, F0, F0);
