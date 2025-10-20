function f0() {
    return f0;
}
async function f1(a2, a3) {
    for (let [i6, i7] = (() => {
            0 * 0;
            return [0, f0];
        })();
        i7;
        i7--) {
        -i6;
    }
    return await f1;
}
f1(f0, f1);
f1();
%OptimizeFunctionOnNextCall(f1);
