function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            try { a12.apply(a7, a7); } catch (e) {}
        }
        new F8(a5, a7, F0);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0();
const v18 = new F0(v17, F0);
const v19 = v18.constructor;
new v19(v18, v19, F0, v17, v17);
