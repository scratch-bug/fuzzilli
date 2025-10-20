function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            a10.bind();
            return a6;
        }
        new Promise(f8);
        return f8;
    }
    const t10 = f4();
    t10(a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0();
const v17 = v16.constructor;
new v17(v17, F0, F0, v16, v17);
const t17 = v16.constructor;
new t17();
