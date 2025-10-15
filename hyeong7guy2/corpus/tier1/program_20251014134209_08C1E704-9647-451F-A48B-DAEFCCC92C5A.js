function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            a20.g = F0;
            a20.g = a20;
            a21--;
            this.f = a21;
        }
        const v23 = new F16(Int8Array, 1825, F16, 1825);
        new F16(v23, F16, v23);
        return a13;
    }
    f10(F6, a9, F0);
    %OptimizeFunctionOnNextCall(f10);
}
new F6();
new F6();
new F6();
