function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = 0;
        while (v8 <= 2) {
            v8++;
        }
        return a7;
    }
    f4(a3, f4, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const t13 = v13.constructor;
new t13();
new F0();
