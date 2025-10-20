async function f0(a1, a2) {
    class C3 {
    }
    `toReversed` in C3;
    await f0;
    return f0;
}
const v7 = f0();
f0(f0(f0(v7, v7), f0), v7);
f0(v7, f0);
%OptimizeFunctionOnNextCall(f0);
