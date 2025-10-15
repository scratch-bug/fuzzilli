let v0 = 9;
const v2 = new Float64Array(v0);
function f3(a4, a5) {
    [Float64Array,v0,...a5] = v2;
    return v0;
}
for (let v6 = 0; v6 < 5; v6++) {
    f3(v6, v6);
    %OptimizeFunctionOnNextCall(f3);
}
