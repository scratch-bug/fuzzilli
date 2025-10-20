let v1 = 256;
v1--;
for (let i5 = 0, i6 = 10; i6; i6--) {
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16(a17, a18, a19) {
        function F20(a22, a23, a24, a25) {
            if (!new.target) { throw 'must be called with new'; }
            function f26() {
                return a19;
            }
            function f27(a28) {
                const v29 = [0.39346707945810944,-991803.8963643727];
                v29[15] = 7;
                v29[15] = v1;
                v29[15] |= a23;
                return a24;
            }
            Object.defineProperty(this, "e", { get: f26, set: f27 });
            this.e = a15;
        }
        const v30 = new F20(F20, F20);
        return v30;
    }
    f16();
    %OptimizeFunctionOnNextCall(f16);
}
new F12();
const v33 = new F12();
const t30 = v33.constructor;
new t30();
