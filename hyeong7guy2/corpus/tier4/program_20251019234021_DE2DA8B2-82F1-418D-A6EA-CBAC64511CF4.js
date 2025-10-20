class C0 {
}
async function f1(a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        C0["p" >> v4] = v4;
    }
    for (let i9 = 257, i10 = 10; i10; i10--) {
    }
    await f1;
    return a3;
}
const v17 = f1(C0, C0);
f1(v17, v17);
%OptimizeFunctionOnNextCall(f1);
