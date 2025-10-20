const v0 = class {
}
for (let i2 = 0, i3 = v0; i3; i3--) {
}
for (let i11 = 0, i12 = 10; i12;) {
    i12--;
}
function f18(a19) {
    function f20() {
        return f20;
    }
    const v21 = f20.bind();
    v21();
    return v21;
}
f18(v0);
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
