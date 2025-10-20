function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            0 < 0;
            const v16 = {};
            for (let i = 0; i < 5; i++) {
                function f17(a18, a19) {
                    const v23 = {
                        [Symbol](a21, a22) {
                        },
                    };
                }
                f17();
                f17();
                f17();
                f17();
            }
        }
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v29 = new F6();
v29.toString();
