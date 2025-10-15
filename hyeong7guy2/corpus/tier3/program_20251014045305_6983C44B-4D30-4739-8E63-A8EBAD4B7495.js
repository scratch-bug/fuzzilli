const v0 = [536870912,256,127,4294967296];
function f1(a2) {
    return v0;
}
for (let i4 = 0; i4 < 20000; ++i4) {
    v0[i4] = i4;
    %PrepareFunctionForOptimization(f1);
}
