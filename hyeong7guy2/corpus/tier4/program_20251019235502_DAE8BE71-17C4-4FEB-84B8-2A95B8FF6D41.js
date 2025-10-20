const v0 = [10000,1759602169,37714];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8; i8--) {
    }
    function f15(a16, a17, a18) {
        return a16;
    }
    const v20 = { type: "function" };
    v20.flushDenormals = v0;
    const v21 = new Worker(f15, v20);
    v21.postMessage(v20);
}
new F1(v0, F1);
