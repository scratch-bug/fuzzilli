const v0 = /[Mabc+?]/vy;
function f1(a2, a3) {
    let v4 = delete v0[1655];
    const v6 = [--v4];
    async function f7(a8, a9) {
        return a9;
    }
    f7(v6, v0);
    return v4;
}
f1(v0, f1);
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
