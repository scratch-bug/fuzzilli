function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            Object[255] >>>= 1879;
            Object.freeze(Object);
        }
        const v17 = new F8();
        return v17;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0();
const v20 = v19.constructor;
const v21 = new v20(F0, v20, v20);
new F0(v19, v21);
