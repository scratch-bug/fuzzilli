function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = 44;
        v8--;
        String.prototype.charCodeAt.call(v8);
        return a3;
    }
    f4(a3, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
