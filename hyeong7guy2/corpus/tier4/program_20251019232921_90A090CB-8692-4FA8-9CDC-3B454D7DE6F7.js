function f0(a1, a2) {
    const v3 = a2 | a2;
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            "p" + v8;
        }
        return f0;
    }
    const v11 = new f4(v3, f4, f4);
    v11.prototype = v11;
    return f4;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
