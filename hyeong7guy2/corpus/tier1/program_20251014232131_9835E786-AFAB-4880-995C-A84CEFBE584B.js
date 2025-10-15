const v1 = class {
}
async function f2(a3, a4) {
    v1.b *= 127;
    await f2;
    return f2;
}
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
