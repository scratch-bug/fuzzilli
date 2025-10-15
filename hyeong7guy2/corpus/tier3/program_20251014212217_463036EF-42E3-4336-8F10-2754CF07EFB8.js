async function f0(a1, a2) {
    for (let i5 = 0, i6 = 10; i6; i6--) {
    }
    for (let v12 = 0; v12 < 5; v12++) {
        const v14 = Symbol.asyncDispose;
        const v16 = {
            [v14]() {
            },
        };
        await using v17 = v16;
    }
    return a2;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
