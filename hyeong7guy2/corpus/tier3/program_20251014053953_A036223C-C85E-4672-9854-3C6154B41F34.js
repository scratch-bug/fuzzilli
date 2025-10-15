let v1 = 256;
function f2() {
    return v1;
}
const v3 = class {
}
let v4 = v3.prototype;
({"a":v4,"h":v1,"length":v1,} = "p");
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
