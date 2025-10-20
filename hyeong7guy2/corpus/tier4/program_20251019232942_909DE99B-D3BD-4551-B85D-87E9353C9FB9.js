class C1 {
}
async function f2(a3, a4) {
    const v6 = [Reflect];
    const v8 = Reflect.apply(("function").charAt, C1, v6);
    await f2;
    return v8;
}
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
