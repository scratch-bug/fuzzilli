function f0() {
    return f0;
}
const v1 = class extends f0 {
}
const v2 = [4.0,-5.10522446331861,-375449.5722707418,2.0,-538.4780902559241,-539.163401684598];
function f4(a5, a6) {
    a6 | a6;
    function f10(a11, a12) {
        a11.keys();
        return a12;
    }
    try { new f10(v1); } catch (e) {}
    const v15 = f10(v2, -65535n);
    v15 >= v15;
    try { arguments["o"](); } catch (e) {}
    return -65535n;
}
f4();
%PrepareFunctionForOptimization(f4);
%OptimizeMaglevOnNextCall(f4);
f4();
