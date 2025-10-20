for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            const v17 = Error();
            v17.stack = v17;
            return f14;
        }
        const t10 = f14();
        t10(F9);
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v20 = new F9(F9, F9);
v20.toString();
