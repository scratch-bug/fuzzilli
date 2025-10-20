function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                function f6() {
                    return f6;
                }
                f6();
                v5++;
                super.b >>>= v5;
            }
        }
    }
    function f10() {
        return f10;
    }
    WebAssembly.compileStreaming(C1, C1).catch(f10);
    const v13 = new C1();
    return v13;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
