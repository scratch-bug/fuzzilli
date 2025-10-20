const v1 = new WeakSet();
for (let v2 = 0; v2 < 10; v2++) {
    function f3() {
        ("NFKD").endsWith(v2, v1);
        return v1;
    }
    f3();
    %OptimizeFunctionOnNextCall(f3);
}
