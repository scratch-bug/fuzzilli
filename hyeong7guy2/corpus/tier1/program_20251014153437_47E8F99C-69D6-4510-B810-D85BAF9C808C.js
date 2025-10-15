const v1 = new Int16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return a14;
            }
            function f18(a19) {
                for (let v20 = 0; v20 < 5; v20++) {
                    [v20,a9,v20] = v1;
                }
                return F2;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        new F11();
        return F11;
    }
    f6(a4, f6, a4);
    %OptimizeFunctionOnNextCall(f6);
}
const v23 = new F2();
const v24 = new F2(v23, v23);
new F2(v24, v24);
