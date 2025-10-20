const v4 = new SharedArrayBuffer(1, { maxByteLength: 268435440 });
const v6 = new Uint8Array(v4);
function f7() {
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        v6[8] = Object;
    }
    const v15 = new F9();
    return v15;
}
f7();
%PrepareFunctionForOptimization(f7);
%OptimizeFunctionOnNextCall(f7);
f7();
