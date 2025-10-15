for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14, a15, a16) {
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            function f23() {
                return this;
            }
            function f24(a25) {
                const t11 = [0.39346707945810944,-991803.8963643727];
                t11[15] |= a20;
                return this;
            }
            Object.defineProperty(this, "e", { get: f23, set: f24 });
            this.e = a12;
        }
        new F17();
        return a11;
    }
    f13();
    %OptimizeFunctionOnNextCall(f13);
}
new F9();
const v30 = new F9();
new F9(v30, F9);
