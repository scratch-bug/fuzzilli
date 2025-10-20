const v2 = new Int32Array(256);
const v4 = class extends Uint8Array {
}
function f5(a6, a7, a8) {
    const v9 = a6 ?? a6;
    a7 ?? a7;
    a8 ?? a8;
    ("function").codePointAt(a7);
    [v4,..."function",true,...v2];
    return v9;
}
f5();
f5(256, v4, v2);
%OptimizeFunctionOnNextCall(f5);
f5();
