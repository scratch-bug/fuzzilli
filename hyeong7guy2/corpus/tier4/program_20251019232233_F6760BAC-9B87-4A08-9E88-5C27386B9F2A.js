let v0 = 1111952540;
const v1 = v0--;
const v2 = v0 - v0;
for (let i5 = 0, i6 = 10; i6; i6--) {
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16(a17, a18, a19) {
        function f20(a21, a22) {
            return a21.call();
        }
        try { f20(F12); } catch (e) {}
        return f20;
    }
    f16(f16, v1, f16(v2));
    %OptimizeFunctionOnNextCall(f16);
}
new F12();
new F12();
