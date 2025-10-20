function f0() {
    WebAssembly.JSTag;
    return f0;
}
const t4 = f0();
t4();
%OptimizeFunctionOnNextCall(f0);
f0();
