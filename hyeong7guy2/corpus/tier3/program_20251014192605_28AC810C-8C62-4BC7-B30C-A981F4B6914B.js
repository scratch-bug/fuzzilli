for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        ("NFKD").localeCompare(v0);
        const v4 = ("NFKD").codePointAt();
        v4 >>> v4;
        const v7 = eval();
        const v8 = v7 ?? v7;
        v8 ?? v8;
        const v10 = v7 ?? v7;
        const v11 = v10 ?? v10;
        const v12 = v11 ?? v11;
        const v13 = v7 ?? v7;
        const v14 = v13 ?? v13;
        v14 ?? v14;
        return v12;
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
