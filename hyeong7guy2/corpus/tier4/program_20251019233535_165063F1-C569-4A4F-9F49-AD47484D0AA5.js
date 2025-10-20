function f0() {
    let v1 = -9007199254740992;
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v1 %= v6;
                v6++;
            }
        }
    }
    try { new C2(); } catch (e) {}
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
