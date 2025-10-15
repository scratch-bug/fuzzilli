for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [];
    function f2() {
        return ("NFKD").codePointAt(v1);
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
