class C0 {
}
async function f1(a2, a3) {
    a3.bind();
    await f1;
    return f1;
}
f1(C0, f1);
f1(C0, BigInt64Array);
%OptimizeFunctionOnNextCall(f1);
