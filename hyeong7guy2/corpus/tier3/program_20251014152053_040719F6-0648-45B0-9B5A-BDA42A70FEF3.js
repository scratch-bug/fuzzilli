const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        for (let v9 = 0; v9 < 5; v9++) {
        }
        function f11(a12) {
            const v13 = {};
            new v0(v0, v0, v0);
            const v15 = {};
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F16(a4, v15);
            eval(a12);
            return a12;
        }
        f11(Int32Array);
        return f5;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(v0, F1);
new F1();
new F1();
