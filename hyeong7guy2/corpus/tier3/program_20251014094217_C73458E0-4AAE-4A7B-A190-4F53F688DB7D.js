function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            try {
                a10.indexOf(a9);
            } catch(e12) {
            }
            return a9;
        }
        new Promise(f8);
        return f8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
