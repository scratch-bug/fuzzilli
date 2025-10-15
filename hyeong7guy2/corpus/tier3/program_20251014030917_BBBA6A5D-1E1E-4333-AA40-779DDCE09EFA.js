async function f0(a1, a2) {
    for (let v3 = 0; v3 < 5; v3++) {
    }
    return await f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
