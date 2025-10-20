let v1 = [-2.220446049250313e-16,0.31163673597347463,0.3498029026774545];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return a9;
            }
            function f18(a19) {
                try {
                    v1.matchAll();
                } catch(e21) {
                }
                return a19;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = 2147483647;
        }
        new F11(v1, v1, a9, f6);
        return 2147483647;
    }
    f6(F2, 0.8504720437807142, a5);
    %OptimizeFunctionOnNextCall(f6);
}
const v24 = new F2();
v24.length = 0.8504720437807142;
v1 = v24.length;
const v26 = new F2();
new F2(v26, v24);
