function f0(a1) {
    for (let v2 = 0; v2 < 5; v2++) {
        function f3(a4, a5) {
            const v7 = new SharedArrayBuffer(a1, a4);
            for (let v9 = 0; v9 < 5; v9++) {
            }
            const v10 = new DataView(v7);
            try { v10.setBigInt64(f3, f3); } catch (e) {}
            return v7;
        }
        f3();
        %OptimizeFunctionOnNextCall(f3);
    }
    return a1;
}
const v13 = f0.prototype;
v13.constructor(v13, v13, v13, v13, v13);
for (let i17 = 0, i18 = 10; i18; i18--) {
}
