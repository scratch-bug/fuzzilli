function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = new Int16Array();
        v9[103] = v9;
        const v14 = new SharedArrayBuffer(1878, { maxByteLength: 1073741824 });
        const v15 = new Int16Array(v14);
        v15[131];
        return v14;
    }
    f4(F0, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
