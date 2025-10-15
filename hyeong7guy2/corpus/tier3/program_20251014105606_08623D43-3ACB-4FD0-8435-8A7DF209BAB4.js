function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        try { a6.apply(a7, a8); } catch (e) {}
        return a4;
    }
    f5(Int16Array);
    %OptimizeFunctionOnNextCall(f5);
}
const v11 = new F1(Int16Array, Int16Array);
const t10 = v11.constructor;
const v13 = new t10(Int16Array, v11);
new F1(v13, v13);
