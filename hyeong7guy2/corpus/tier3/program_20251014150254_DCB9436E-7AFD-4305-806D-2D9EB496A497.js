function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        for (let v9 = 0; v9 < 10; v9++) {
            ++v9;
        }
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            eval();
        }
        for (let v19 = 0; v19 < 5; v19++) {
        }
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0();
new F0(F0, v21);
new F0();
