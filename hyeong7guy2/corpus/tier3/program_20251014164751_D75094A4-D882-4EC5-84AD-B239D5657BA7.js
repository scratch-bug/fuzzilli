async function f0(a1, a2) {
    const v5 = Date(a1).constructor;
    v5.raw(v5);
    return await f0;
}
const v8 = f0();
f0(v8, v8);
%OptimizeFunctionOnNextCall(f0);
