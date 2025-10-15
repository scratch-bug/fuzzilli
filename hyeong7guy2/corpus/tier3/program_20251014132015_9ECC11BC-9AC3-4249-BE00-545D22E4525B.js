function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5 - a5;
}
async function f9(a10, a11) {
    const v12 = delete Uint8Array[6];
    new F1(arguments, v12, v12, BigUint64Array);
    await f9;
    return a11;
}
f9(F1, F1);
f9(Uint8Array, F1);
%OptimizeFunctionOnNextCall(f9);
