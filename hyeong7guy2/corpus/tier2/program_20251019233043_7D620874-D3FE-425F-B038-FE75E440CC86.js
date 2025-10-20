function f0(a1) {
    for (let v2 = 0; v2 < 5; v2++) {
        function f3(a4, a5) {
            a4.maxByteLength = a4;
            const v7 = new SharedArrayBuffer(a1, a4);
            const v9 = new DataView(v7);
            v9.byteLength;
            return a4;
        }
        f3(a1);
        %OptimizeFunctionOnNextCall(f3);
    }
    return a1;
}
f0(f0);
for (let i15 = 0, i16 = 16; i16; i16--) {
}
