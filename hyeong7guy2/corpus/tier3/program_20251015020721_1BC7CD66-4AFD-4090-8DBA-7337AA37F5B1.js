const v1 = {};
function f2(a3, a4) {
    a4 | a4;
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a9?.at;
        a10 % a10;
    }
    new F7(a4);
    const v14 = new F7("2147483647");
    const t10 = v14.constructor;
    new t10(Uint8ClampedArray, v1);
    return "2147483647";
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2(Uint8ClampedArray, f2);
