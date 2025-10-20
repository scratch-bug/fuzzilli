function f0() {
    let v1 = -9007199254740992;
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                const v8 = v6 + v1;
                v8 >> v8;
                super.c &= v8;
                for (let i11 = 0; i11 < 1; i11++) {
                    v1 %= i11;
                }
            }
        }
    }
    const v17 = new C2(C2, v1);
    const v18 = v17.constructor;
    try { new v18(f0); } catch (e) {}
    return v1;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
