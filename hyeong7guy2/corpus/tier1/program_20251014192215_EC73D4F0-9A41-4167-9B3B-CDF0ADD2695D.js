const v0 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a3;
            }
            function f17(a18) {
                let [v19,,...v20] = v0;
                return a14;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10();
        return -1;
    }
    f5(this, a4, a4);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1(F1, F1);
new F1();
