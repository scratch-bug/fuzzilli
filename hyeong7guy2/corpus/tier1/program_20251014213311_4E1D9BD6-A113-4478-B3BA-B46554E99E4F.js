const v1 = new Int16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return a15;
            }
            function f18(a19) {
                for (let v20 = 0; v20 < 5; v20++) {
                    [v20,a9,v20] = v1;
                }
                return a9;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        const v21 = new F11(this, F11, v1, F2);
        return v21;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v23 = new F2(v1, Int16Array);
const t25 = v23.constructor;
new t25(v23, v23);
new F2();
