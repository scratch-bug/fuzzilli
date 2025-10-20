const v0 = [10000,1759602169,37714];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8; i8--) {
    }
    for (let v14 = 0; v14 < 25; v14++) {
        a3["p" + v14] = v14;
    }
    function f18(a19, a20, a21) {
        return a20;
    }
    const v23 = { type: "function" };
    v23.flushDenormals = v0;
    const v24 = new Worker(f18, v23);
    v24.postMessage(v23);
}
new F1(v0);
