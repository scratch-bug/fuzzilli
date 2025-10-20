async function f1(a2, a3) {
    let v4;
    try { v4 = a3(); } catch (e) {}
    let v6;
    try {
    const t0 = "America/La_Paz";
    v6 = t0();
    } catch (e) {}
    for (let i8 = 0, i9 = v4;
        (() => {
            const v11 = -11n == v6;
            [v11,v11];
            return i9;
        })();
        i9--) {
    }
    await f1;
    return a2;
}
f1(1024, f1);
%OptimizeFunctionOnNextCall(f1);
