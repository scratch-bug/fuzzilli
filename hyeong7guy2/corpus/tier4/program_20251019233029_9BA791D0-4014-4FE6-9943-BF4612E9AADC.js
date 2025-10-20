function f1(a2, a3) {
    return a3;
}
const v4 = class extends WeakSet {
}
async function* f7(a8, a9, a10, a11) {
    const v12 = yield a10;
    f1(Symbol, Symbol, v4[Symbol]);
    await v12;
    yield* -10;
    return a11;
}
for (let i = 0; i < 5; i++) {
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
