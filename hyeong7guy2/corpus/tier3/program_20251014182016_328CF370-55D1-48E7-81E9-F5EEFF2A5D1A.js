function f0() {
    return f0;
}
async function* f2(a3, a4) {
    const v5 = await Symbol;
    yield* [f0,v5,v5];
    return a3;
}
f2(Symbol, f2);
f2();
%OptimizeFunctionOnNextCall(f2);
f2();
