function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = ([a7,a7,a7,a7]).constructor;
        v9().forEach(v9);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const t11 = v13.constructor;
new t11();
new F0(v13, v13);
