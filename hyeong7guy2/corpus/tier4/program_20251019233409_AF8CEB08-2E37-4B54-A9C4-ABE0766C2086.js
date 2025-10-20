function f0(a1, a2) {
    let v3 = a1.cos();
    const v4 = v3--;
    v3 >>> v3;
    try {
        f0(a2, v4);
    } catch(e7) {
    }
    return f0;
}
const v9 = f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0(f0, v9); } catch (e) {}
