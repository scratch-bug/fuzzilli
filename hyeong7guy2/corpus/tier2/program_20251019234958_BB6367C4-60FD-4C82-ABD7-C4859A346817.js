function f4() {
    function f5(a6, a7) {
        a6 - a6;
        a7 ?? a7;
        const v12 = new SharedArrayBuffer(7);
        const v14 = new DataView(v12);
        function f15(a16, a17, a18) {
            a16 != a16;
            a17 & a17;
            const v21 = a18 >>> a18;
            const v22 = {};
            v22.h = v22;
            return v21;
        }
        f15.name = f15;
        f15(-17338);
        f15(7);
        f15(7, Array, a7);
        f15(7);
        f15();
        f15(-65536);
        f15();
        f15(123);
        try { v14.setFloat64(); } catch (e) {}
        return f5;
    }
    f5();
    %PrepareFunctionForOptimization(f5);
    %OptimizeMaglevOnNextCall(f5);
    f5();
    return Array;
}
const v34 = { construct: f4 };
v34.construct(-17338, v34, v34, v34);
