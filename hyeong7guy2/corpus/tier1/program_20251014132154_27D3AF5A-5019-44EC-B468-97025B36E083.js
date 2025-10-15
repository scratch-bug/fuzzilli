function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
let v5 = new F0(F0, F0, F0);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            function f21() {
                return a12;
            }
            function f22(a23) {
                --v5;
                return a17;
            }
            Object.defineProperty(this, "e", { get: f21, set: f22 });
            this.e = -1;
        }
        new F15(f10, -1, a11, a9);
        return a13;
    }
    f10();
    %OptimizeFunctionOnNextCall(f10);
}
const v27 = new F6();
new F6(F6, v27);
new F6();
