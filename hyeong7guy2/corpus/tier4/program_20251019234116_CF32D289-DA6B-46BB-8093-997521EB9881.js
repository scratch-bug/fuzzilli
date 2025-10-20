function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        for (const v9 of "toJSON") {
            const v11 = Symbol.dispose;
            const v13 = {
                [v11]() {
                },
            };
            using v14 = v13;
        }
        return F1;
    }
    f5(a4, f5, a4);
    %OptimizeFunctionOnNextCall(f5);
}
new F1("toJSON", F1);
new F1(F1, "toJSON");
new F1(F1, "toJSON");
