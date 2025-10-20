function f0() {
    const v2 = Array();
    for (let v4 = 0; v4 < 4; v4++) {
        function f5() {
            return f5;
        }
        v2[v4] *= 145;
    }
    return Array;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
