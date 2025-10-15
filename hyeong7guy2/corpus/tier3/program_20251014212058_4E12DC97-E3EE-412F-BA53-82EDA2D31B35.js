function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    a4 | a4;
    function f8(a9, a10, a11) {
        for (let v12 = 0; v12 < 5; v12++) {
            Symbol instanceof F0;
        }
        return F0;
    }
    f8();
    let v16;
    try { v16 = arguments["o"](); } catch (e) {}
    return v16;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
