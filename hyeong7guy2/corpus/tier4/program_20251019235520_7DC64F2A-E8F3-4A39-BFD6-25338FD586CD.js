async function f0(a1, a2) {
    try { a2(); } catch (e) {}
    for (let i6 = 0, i7 = 10; i7; i7--) {
    }
    let v14 = Math.log(a2);
    v14++;
    return await f0;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
