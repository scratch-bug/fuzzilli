for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        ("NFKD")[1];
        return v0;
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
