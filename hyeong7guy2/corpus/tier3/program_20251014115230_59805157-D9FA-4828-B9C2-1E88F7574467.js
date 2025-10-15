for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [v0,v0,v0,v0];
    function f2() {
        const t3 = "NFKD";
        t3[1] = "NFKD";
        return ("NFKD").codePointAt(v1);
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
