function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            Array.isArray(a2);
            return a10;
        }
        new Promise(f8);
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0();
const t14 = v16.constructor;
const v18 = new t14();
new F0(v18, v18);
