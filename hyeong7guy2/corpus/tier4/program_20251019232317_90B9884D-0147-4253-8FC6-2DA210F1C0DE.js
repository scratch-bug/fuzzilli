const v2 = new Uint8ClampedArray(956);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    function f9() {
        function f10(a11) {
            v2[10] /= a11;
        }
        f10();
        return f10;
    }
    f9();
    %OptimizeFunctionOnNextCall(f9);
}
new F3();
