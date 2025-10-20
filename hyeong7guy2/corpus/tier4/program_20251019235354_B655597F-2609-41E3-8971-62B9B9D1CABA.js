for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        try {
        const t0 = "NFKD";
        t0();
        } catch (e) {}
        ("NFKD").endsWith(v0);
        return "NFKD";
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
