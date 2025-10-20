for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
        2363 + (("NFKD").codePointAt(v1) + "NFKD");
        return v1;
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
