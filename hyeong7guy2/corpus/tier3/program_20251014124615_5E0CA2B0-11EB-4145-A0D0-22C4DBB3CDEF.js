for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        const t2 = "g";
        t2[1] = "g";
        return ("g").codePointAt(v0);
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
