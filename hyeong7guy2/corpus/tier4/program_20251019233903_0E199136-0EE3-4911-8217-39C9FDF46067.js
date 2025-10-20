let v0 = 9;
let v1 = 1.0497201825143915e+308;
let v2 = "127";
const v4 = new Int8Array(v2);
class C5 {
}
function f6() {
    ({"buffer":v0,"byteLength":C5,"length":v2,...v1} = v4);
    return v1;
}
f6();
class C8 extends f6 {
}
new C8();
%OptimizeFunctionOnNextCall(f6);
f6();
