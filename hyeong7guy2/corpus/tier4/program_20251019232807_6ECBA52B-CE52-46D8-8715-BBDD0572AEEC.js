function f1() {
    Set >= Uint8ClampedArray ? Set : Uint8ClampedArray;
    return f1;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
