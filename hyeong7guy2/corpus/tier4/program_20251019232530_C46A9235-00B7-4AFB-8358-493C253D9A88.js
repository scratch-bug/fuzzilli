function f1() {
    const v3 = Array.prototype;
    v3.values.apply(v3);
    eval();
}
Float32Array.toString = f1;
const v9 = new Float64Array(Float64Array);
v9.slice(Float32Array);
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
