function f0() {
    const v1 = [1000000000.0,-5.0,0.41989360149691846];
    v1[1];
    v1[1];
    return f0;
}
const v4 = f0();
v4.call(f0, f0, v4);
%OptimizeMaglevOnNextCall(f0);
f0();
