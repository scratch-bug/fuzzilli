function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        Array.prototype.forEach(f4);
        return a5;
    }
    f4(a2);
    f4(F0);
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
new F0(F0, F0);
