async function* f1(a2, a3, a4, a5) {
    await (yield a4);
    yield* -10;
    return a3;
}
for (let i = 0; i < 5; i++) {
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
