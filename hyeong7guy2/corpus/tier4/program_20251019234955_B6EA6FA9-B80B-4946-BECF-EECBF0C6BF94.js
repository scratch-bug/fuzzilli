function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = 0;
        while (v8 != 2) {
            v8++;
        }
        return a6;
    }
    f4(a2, a2, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
new F0(F0, v13);
new F0();
