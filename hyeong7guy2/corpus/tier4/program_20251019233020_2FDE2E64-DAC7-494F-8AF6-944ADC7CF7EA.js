function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = 0;
        while (v8 < 2) {
            const v11 = v8++;
            function f12(a13, a14) {
                return a5;
            }
            f12.call(v11);
        }
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0();
const t17 = v17.constructor;
new t17();
new F0();
