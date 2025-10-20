const v1 = Date();
for (let v2 = 0; v2 < 10; v2++) {
    function f3() {
        with ("NFKD") {
        }
        ("NFKD").startsWith(v1);
        return ("NFKD").codePointAt(v2);
    }
    f3();
    %OptimizeFunctionOnNextCall(f3);
}
