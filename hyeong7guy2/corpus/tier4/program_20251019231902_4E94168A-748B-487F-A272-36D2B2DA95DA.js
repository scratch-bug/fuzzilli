const v0 = [];
async function* f1(a2, a3, a4) {
    yield* v0;
    return a4;
}
f1(f1, v0, v0).next();
%OptimizeFunctionOnNextCall(f1);
