function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v14 = new F8(F0, F0, a3, a7);
        const v15 = v14.constructor;
        new v15();
        return v15;
    }
    const v17 = f4(this, F0, f4);
    v17.prototype = v17;
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v19 = new F0();
new F0(v19, v19);
