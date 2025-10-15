async function f0(a1) {
    let v3;
    try { v3 = Promise.call(); } catch (e) {}
    const v4 = await Promise;
    try { v4(v3); } catch (e) {}
    const v7 = Error();
    try { v7.toString(); } catch (e) {}
    return v7;
}
const v9 = f0.constructor();
f0();
f0(v9);
%OptimizeMaglevOnNextCall(f0);
