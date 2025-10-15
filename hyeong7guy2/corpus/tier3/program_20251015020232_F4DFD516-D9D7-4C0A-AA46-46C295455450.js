function f0(a1, a2) {
    try { a2(a1, f0); } catch (e) {}
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = v4 % v4;
        v5 >> v5;
    }
    return a2;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
f0();
