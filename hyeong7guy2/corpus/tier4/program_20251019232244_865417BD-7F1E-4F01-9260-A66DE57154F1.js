for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
        const v3 = Symbol.dispose;
        const v5 = {
            [v3]() {
            },
        };
        using v6 = v5;
        [..."NFKD"];
        return "NFKD";
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
