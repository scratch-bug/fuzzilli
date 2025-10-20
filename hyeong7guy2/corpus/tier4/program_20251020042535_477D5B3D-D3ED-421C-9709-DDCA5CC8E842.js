function f0() {
    const v2 = Array.prototype;
    v2.every(Array);
    return v2;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
