async function f0(a1) {
    let v3;
    try { v3 = Promise.call(); } catch (e) {}
    v3 >> v3;
    await Promise;
    return v3;
}
f0(f0(f0));
%OptimizeMaglevOnNextCall(f0);
