function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        a7.propertyIsEnumerable().constructor(f4);
        return F0;
    }
    f4(a2, a3, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
const v12 = v11.constructor;
new v12(v12, v11, F0, F0);
new F0();
