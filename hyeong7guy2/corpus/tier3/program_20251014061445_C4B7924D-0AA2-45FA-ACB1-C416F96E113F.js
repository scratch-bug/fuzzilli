const v3 = new Int32Array(256);
const v5 = class extends Uint8Array {
}
function f6(a7, a8, a9) {
    [v5,..."function",true,...v3];
}
f6();
f6(256, 256, v3);
%OptimizeFunctionOnNextCall(f6);
f6();
