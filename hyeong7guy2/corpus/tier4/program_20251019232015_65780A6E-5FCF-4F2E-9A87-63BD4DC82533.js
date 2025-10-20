function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v11 = typeof 1073741825 === "object";
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F12(v11);
        return a3;
    }
    f4(F0, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v21 = new F0();
const v22 = v21.constructor;
new v22(F0, v22);
