for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [v0,v0,v0,v0];
    function f2() {
        ("NFKD").endsWith(v1);
        return f2;
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
