const v2 = new Float64Array(1024);
const v3 = [4.0,-5.10522446331861,-375449.5722707418,2.0,-538.4780902559241,-539.163401684598];
function f4(a5, a6) {
    function f7(a8, a9) {
        a8[3] = a8;
        return a8;
    }
    f7(v2);
    f7(v3);
    return Float64Array;
}
f4(v3, Float64Array);
%PrepareFunctionForOptimization(f4);
%OptimizeMaglevOnNextCall(f4);
f4(1024, v2);
