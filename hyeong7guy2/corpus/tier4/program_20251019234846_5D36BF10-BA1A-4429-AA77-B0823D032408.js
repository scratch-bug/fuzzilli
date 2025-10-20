const v2 = new Float32Array(1024);
async function f3(a4) {
    v2.length ||= 1024;
    return await Promise;
}
f3(v2);
f3();
%OptimizeMaglevOnNextCall(f3);
