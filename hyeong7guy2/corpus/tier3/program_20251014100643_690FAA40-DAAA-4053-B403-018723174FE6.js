async function f0(a1, a2) {
    class C3 {
    }
    const v4 = C3 !== f0;
    !v4;
    v4 ? C3 : f0;
    await f0;
    return C3;
}
const v8 = f0(f0, f0);
f0(v8, v8);
%OptimizeFunctionOnNextCall(f0);
