function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = 7;
        while (v8 <= 65537) {
            v8++;
        }
        return F0;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0(F0, F0);
const t13 = v13.constructor;
new t13(F0);
new F0();
