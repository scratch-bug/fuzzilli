async function* f1(a2, a3, a4, a5) {
    const v6 = yield a5;
    await a2;
    yield* -10645;
    return v6;
}
for (let v8 = 0; v8 < 5; v8++) {
    f1();
    %OptimizeMaglevOnNextCall(f1);
}
