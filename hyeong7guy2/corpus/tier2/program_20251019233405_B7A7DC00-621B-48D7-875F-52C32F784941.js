for (let i4 = 0, i5 = 10; i5; i5--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15(a16, a17, a18) {
        function F19(a21, a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            function f25() {
                return this;
            }
            function f26(a27) {
                const v28 = [0.39346707945810944,-991803.8963643727];
                v28[15] = 7;
                v28[15] = 256;
                v28[15] |= a22;
                return a16;
            }
            Object.defineProperty(this, "e", { get: f25, set: f26 });
            this.e = a14;
        }
        new F19(F19, F19, this, f15);
        return a13;
    }
    f15(this, 256, this);
    %OptimizeFunctionOnNextCall(f15);
}
new F11(F11, F11);
const v32 = new F11();
const t28 = v32.constructor;
new t28();
