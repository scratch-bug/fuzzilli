function f0(a1) {
    const v3 = new Uint32Array();
    function f4() {
        return v3;
    }
    const v5 = [-1949062951,-809467572,1,-29760,1367634515,47021,-1523345805];
    const v6 = new f4(...v5, ...v5, ...v3);
    return v6;
}
const v12 = {
    o(a8, a9) {
        f0();
        %PrepareFunctionForOptimization(f0);
        %OptimizeFunctionOnNextCall(f0);
        return f0();
    },
};
v12.o(f0, f0);
