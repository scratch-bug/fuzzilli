for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [v0];
    function f2() {
        const v4 = ("NFKD").codePointAt("NFKD");
        ("NFKD").codePointAt(v1);
        return v4;
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
