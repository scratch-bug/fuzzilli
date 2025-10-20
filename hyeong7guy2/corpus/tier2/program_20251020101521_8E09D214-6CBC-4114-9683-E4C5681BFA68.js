function f0() {
    let v1 = 7;
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                super.c &= v6 & v1;
                const v10 = new Uint8Array();
                v10[28] = v10;
                for (let v11 = 0; v11 < 5; v11++) {
                    v1 %= v11;
                }
            }
        }
    }
    new C2(f0, f0);
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
