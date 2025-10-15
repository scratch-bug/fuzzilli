const v0 = class {
}
async function* f1(a2, a3, a4, a5) {
    await a2;
    yield* v0;
    return a4;
}
const v7 = f1(v0, f1, f1, v0);
const v8 = f1();
%OptimizeFunctionOnNextCall(f1);
f1(v7, v8, v8, v7);
