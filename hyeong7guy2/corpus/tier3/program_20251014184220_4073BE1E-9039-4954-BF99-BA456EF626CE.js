async function f1(a2, a3) {
    const v4 = new Uint8Array();
    let v5 = v4.length;
    await f1;
    return ++v5;
}
f1(Uint8Array, f1());
%OptimizeFunctionOnNextCall(f1);
