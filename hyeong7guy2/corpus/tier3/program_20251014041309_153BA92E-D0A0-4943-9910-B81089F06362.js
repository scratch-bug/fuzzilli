function f0() {
    const v1 = [-4294967296,1024,61723,-65536,-4294967297,-1024,3,10507,1073741824,-3124];
    try { v1.forEach(); } catch (e) {}
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
