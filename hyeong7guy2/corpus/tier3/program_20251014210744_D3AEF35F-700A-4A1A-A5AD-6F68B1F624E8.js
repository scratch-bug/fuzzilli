function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Array(262144).find(a5);
        return F0;
    }
    try { f4(); } catch (e) {}
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const v14 = v13.constructor;
const v15 = new v14(v14);
new F0(v15, v15);
