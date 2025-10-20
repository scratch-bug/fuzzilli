function f0(a1) {
    for (let v2 = 0; v2 < 5; v2++) {
        function f3(a4, a5) {
            return ArrayBuffer.isView();
        }
        f3();
        %OptimizeFunctionOnNextCall(f3);
    }
    return f0;
}
f0.call(f0, f0, f0, f0);
for (let i12 = 0, i13 = 10; i13; i13--) {
}
