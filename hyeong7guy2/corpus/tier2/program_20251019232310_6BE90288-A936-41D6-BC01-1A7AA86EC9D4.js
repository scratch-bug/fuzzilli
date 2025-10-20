for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            function f17() {
                return a15;
            }
            const t9 = f17.constructor;
            const t10 = t9();
            t10();
            let v21 = 1073741823;
            const v22 = v21--;
            v22 / v22;
            eval(a11);
            const v25 = {};
            return a12;
        }
        f14();
        f14();
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v28 = new F9();
v28.toString();
