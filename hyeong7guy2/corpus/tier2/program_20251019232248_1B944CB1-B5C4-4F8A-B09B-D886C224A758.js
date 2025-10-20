[-2.7039320674921585,1e-15,0.3057128577541167,8.761586909575053e+306,-2.0,1000000.0,-1.415076979898969e+308,0.9578679858355266,520.6071107326736,5.0];
function f2() {
    function f3(a4, a5) {
        const v8 = new SharedArrayBuffer(7);
        const v10 = new DataView(v8);
        try { v10.setFloat64(); } catch (e) {}
        v10.setInt32();
    }
    f3();
    %PrepareFunctionForOptimization(f3);
    %OptimizeMaglevOnNextCall(f3);
    f3();
}
({ construct: f2 }).construct();
