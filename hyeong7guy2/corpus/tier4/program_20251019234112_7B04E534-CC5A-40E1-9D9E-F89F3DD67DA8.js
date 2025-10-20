let v0 = -65537;
async function f1(a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        v0 -= v4;
        v4++;
    }
    for (let i8 = 0, i9 = 10; i9; i9--) {
    }
    await f1;
    return v0;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
