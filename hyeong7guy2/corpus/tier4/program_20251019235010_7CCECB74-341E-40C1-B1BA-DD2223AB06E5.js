async function f0(a1, a2) {
    const v5 = Date.prototype.getHours;
    try { v5.call(); } catch (e) {}
    return await f0;
}
f0(f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
