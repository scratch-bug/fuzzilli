function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = Array.fromAsync(this);
            v15.then();
            v15.constructor = f4;
            v15.then();
        }
        new F8();
        return F8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
const t17 = v20.constructor;
new t17();
new F0();
