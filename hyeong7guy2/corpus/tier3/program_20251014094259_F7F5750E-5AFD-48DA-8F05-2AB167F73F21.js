function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            a10.indexOf = a9;
            Array(1048576);
            return a10.indexOf(1048576, F0);
        }
        new Promise(f8);
        return a3;
    }
    f4(a2, a3, a3);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v19 = new F0();
new F0(v19, v19);
