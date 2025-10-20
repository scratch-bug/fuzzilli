for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14, a15, a16) {
        let v17 = 257;
        for (let i19 = -30237; i19; i19 * v17, v17++, ++i19) {
        }
        return f13;
    }
    f13(F9, F9, a12);
    %OptimizeFunctionOnNextCall(f13);
}
new F9();
const v27 = new F9();
new F9(v27, v27);
