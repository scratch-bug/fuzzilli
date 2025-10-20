async function f0(a1, a2) {
    const v4 = Date.bind();
    new v4(v4, f0);
    return await f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
