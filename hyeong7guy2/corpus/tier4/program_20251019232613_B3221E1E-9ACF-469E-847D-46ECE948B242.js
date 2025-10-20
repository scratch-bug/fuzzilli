for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
        const v3 = Symbol.dispose;
        const v5 = {
            [v3]() {
            },
        };
        using v6 = v5;
        const v8 = new Uint8ClampedArray();
        for (const v9 in v8) {
        }
        return f2;
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
