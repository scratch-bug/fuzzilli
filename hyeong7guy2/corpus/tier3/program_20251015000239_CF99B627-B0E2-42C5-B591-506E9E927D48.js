const v1 = Date();
for (let v2 = 0; v2 < 10; v2++) {
    function f3() {
        ("NFKD").startsWith(v1);
        const t3 = "NFKD";
        t3[1] = "NFKD";
        return ("NFKD").codePointAt();
    }
    f3();
    %OptimizeFunctionOnNextCall(f3);
}
