async function f0(a1, a2) {
    return a1;
    await a2;
    return f0;
}
f0(f0, f0);
for (let [i8, i9] = (() => {
        f0();
        %OptimizeMaglevOnNextCall(f0);
        f0();
        return [10, 10];
    })();
    i9;
    i9--) {
}
