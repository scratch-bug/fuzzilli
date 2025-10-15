for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        const v3 = ("NFKD").replaceAll("NFKD", "NFKD");
        v3 + v3;
        return v3;
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
