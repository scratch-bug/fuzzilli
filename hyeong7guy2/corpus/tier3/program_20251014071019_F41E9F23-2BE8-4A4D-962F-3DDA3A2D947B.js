function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            a14 - a14;
            a16 >>> a16;
        }
        new F11();
        new F11(a8, a10, a9, F3);
        return F3;
    }
    f7(F0, a6, Uint16Array);
    %OptimizeFunctionOnNextCall(f7);
}
const v22 = new F3(Uint16Array, Uint16Array);
new F3(v22, v22);
new F3(v22, Uint16Array);
