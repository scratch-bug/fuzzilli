const v0 = [4.358606988827848,-4.0,0.6021783069029311,-3.9919084140753185];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4--;
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return a10;
            }
            function f19(a20) {
                (typeof a4)[5];
                return a20;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        return v0;
    }
    f7(v0, v0, a5);
    %OptimizeFunctionOnNextCall(f7);
}
const v25 = new F2(-8n);
const t24 = v25.constructor;
const v27 = new t24(v0);
const t26 = v25.constructor;
new t26(F2, F2, v27);
