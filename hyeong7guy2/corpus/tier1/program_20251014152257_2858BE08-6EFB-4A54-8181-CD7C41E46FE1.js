function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            a10.indexOf = this;
            a10.indexOf = a9;
            Array(1048576);
            return a7;
        }
        new Promise(f8);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
