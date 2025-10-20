const v1 = new Int16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a7;
            }
            function f17(a18) {
                for (let v19 = 0; v19 < 5; v19++) {
                    [v19,a9,v19] = v1;
                }
                return a18;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            const v22 = new Float64Array(128);
            v22[16] = v22;
            function f23(a24) {
                v22[this];
                return a24;
            }
            this.e = a5;
        }
        const v26 = new F10();
        return v26;
    }
    f6(F2, this, F2);
    %OptimizeFunctionOnNextCall(f6);
}
const v28 = new F2(F2, F2);
const t31 = v28.constructor;
new t31();
new F2();
