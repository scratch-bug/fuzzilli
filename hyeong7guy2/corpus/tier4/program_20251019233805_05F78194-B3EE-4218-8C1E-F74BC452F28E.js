function f0(a1) {
    for (let v2 = 0; v2 < 5; v2++) {
        function f3(a4, a5) {
            const v7 = new SharedArrayBuffer(a1, a4);
            const v9 = new DataView(v7);
            return v9.byteLength;
        }
        f3();
        %OptimizeFunctionOnNextCall(f3);
    }
    return f0;
}
f0(f0);
for (let i15 = 0, i16 = 10; i16; i16--) {
}
