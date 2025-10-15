const v2 = new Float64Array(9);
function f3(a4, a5) {
    a5[2] = a5;
    f3[6] = a5;
    [Float64Array,a5,...a5] = v2;
    return Float64Array;
}
for (let v6 = 0; v6 < 5; v6++) {
    %OptimizeFunctionOnNextCall(f3);
    f3([38824,127], "-1127306849");
}
