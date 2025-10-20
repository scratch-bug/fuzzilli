const v1 = ([1.7976931348623157e+308,2.0,0.5027260187797385,1000.0,2.725966752415241]).keys();
function f2() {
    return v1.__proto__;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
