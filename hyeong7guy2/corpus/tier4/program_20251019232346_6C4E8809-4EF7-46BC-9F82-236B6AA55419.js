function f0() {
    for (let v2 = 0; v2 < 5; v2++) {
        v2++;
        -(v2 >> 1073741824);
    }
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
