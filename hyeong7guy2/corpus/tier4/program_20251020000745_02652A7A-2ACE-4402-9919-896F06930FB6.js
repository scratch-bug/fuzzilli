function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
        }
        for (let v9 = 0; v9 < 5; v9++) {
            const v11 = new Uint8ClampedArray();
            v11[v11.byteLength] &= v9;
        }
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v14 = new F0();
new F0(v14, v14);
new F0();
