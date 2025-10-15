function f0(a1, a2) {
    a2 | a2;
    /../g;
    let [v7,v8] = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
    arguments[1] = a2;
    return f0;
}
const v10 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(v10, f0);
