const v1 = new Set();
const v2 = v1.entries();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return -1;
            }
            function f19(a20) {
                return typeof a5;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        return a5;
    }
    f7(a6, v1, v2);
    %OptimizeFunctionOnNextCall(f7);
}
const v24 = new F3();
const t23 = v24.constructor;
new t23(v2);
new F3();
for (let i29 = 10, i30 = 10; i30; i30--) {
}
