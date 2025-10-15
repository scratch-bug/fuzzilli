for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        delete v0[("NFKD").codePointAt()];
        const v6 = eval();
        v6 ?? v6;
        v6 ?? v6;
        return v0;
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
