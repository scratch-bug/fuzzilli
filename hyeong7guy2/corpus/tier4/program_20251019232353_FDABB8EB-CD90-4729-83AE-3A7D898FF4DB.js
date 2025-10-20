async function f0(a1, a2) {
    const v4 = Date.prototype;
    try { v4.getMinutes(); } catch (e) {}
    await f0;
    return Date;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
