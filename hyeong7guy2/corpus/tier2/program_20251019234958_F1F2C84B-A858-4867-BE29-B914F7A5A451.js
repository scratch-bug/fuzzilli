async function f0(a1, a2) {
    class C4 {
        constructor(a6, a7) {
            for (let i9 = 0; i9 < 10000; ++i9) {
                super.b >>>= i9 / 1;
            }
        }
    }
    new C4(a2, a1);
    for (let i19 = 0, i20 = 10; i20; i20--) {
    }
    await f0;
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
