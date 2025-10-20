async function f0(a1, a2) {
    let v3;
    try { v3 = a2(); } catch (e) {}
    for (let i5 = 0, i6 = v3; i6; i6--) {
        i6.finally(i6).then(i6);
    }
    return await f0;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
