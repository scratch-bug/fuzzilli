for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t4 = WebAssembly.Module;
    const v48 = new t4(v45);
    function f49() {
        return 2;
    }
    const v50 = { f: f49 };
    const v51 = { m: v50 };
    const t11 = WebAssembly.Instance;
    const v53 = new t11(v48, v51);
    const v55 = v53.exports.main;
    for (let i57 = 0; v55(), i57 < 20000; i57++) {
    }
    return 105;
}
f9();
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
