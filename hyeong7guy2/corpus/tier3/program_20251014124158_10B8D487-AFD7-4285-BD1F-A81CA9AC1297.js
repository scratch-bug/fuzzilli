async function f3(a4, a5) {
    for (let i8 = 0, i9 = 10;
        i9;
        (() => {
            const v12 = i9--;
            v12 - v12;
        })()) {
    }
    const v16 = await f3;
    v16.name = v16;
    return WeakSet;
}
for (let i = 0; i < 10; i++) {
    f3();
}
%OptimizeFunctionOnNextCall(f3);
