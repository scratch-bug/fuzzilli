const v2 = new Int32Array(256);
const v4 = class extends Uint8Array {
}
function f6(a7, a8, a9) {
    [v4,..."function",true,...v2,9];
    return a8;
}
f6();
f6();
%OptimizeFunctionOnNextCall(f6);
f6(v2, v4, v4);
