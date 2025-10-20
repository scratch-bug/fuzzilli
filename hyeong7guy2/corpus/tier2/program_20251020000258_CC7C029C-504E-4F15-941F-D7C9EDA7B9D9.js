function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { a3.call(F0, a2); } catch (e) {}
    function f5(a6, a7, a8) {
        a6.prototype = a6;
        Uint8Array.of(223, 197, 196, 152, 175, 164, 225, 175, 74, 90, 188, 187, 17, 79, 134, 238, 44, 10, 111, 246, 79, 26, 202, 164, 219, 83, 70, 247, 191, 66, 233, 60, 1, 156, 117, 20, 70, 249, 172, 71, 31, 179, 2, 17, 17, 196, 210, 0, 147, 247, 255, 11, 70, 125, 215, 110, 237, 97, 238, 0, 104, 97);
        return 164;
    }
    f5(this);
    f5(this);
    %OptimizeFunctionOnNextCall(f5);
}
new F0(F0, F0);
new F0();
