for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14, a15, a16) {
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            function f23() {
                return F9;
            }
            function f24(a25) {
                const v26 = [0.39346707945810944,-991803.8963643727];
                v26[15] = f24;
                v26[15] |= a20;
                return this;
            }
            Object.defineProperty(this, "e", { get: f23, set: f24 });
            this.e = a12;
        }
        new F17(this, a11, a14, a14);
        return f13;
    }
    f13(F9, F9, a11);
    %OptimizeFunctionOnNextCall(f13);
}
const v29 = new F9(F9, F9);
new F9();
new F9(v29, v29);
