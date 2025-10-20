const v1 = new Map();
function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer(v4, SharedArrayBuffer);
            const v11 = new DataView(v9);
            try { v11.setBigUint64(f5, v1); } catch (e) {}
            return v9;
        }
        f5(a3, v4);
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
f2(f2);
for (let i16 = 10, i17 = 10; i17; i17--) {
}
