const v2 = new Float64Array(9);
function f3(a4, a5) {
    [Float64Array,a5,...a5] = v2;
    return a4;
}
for (let v6 = 0; v6 < 5; v6++) {
    f3(Float64Array, v2);
    %OptimizeFunctionOnNextCall(f3);
}
