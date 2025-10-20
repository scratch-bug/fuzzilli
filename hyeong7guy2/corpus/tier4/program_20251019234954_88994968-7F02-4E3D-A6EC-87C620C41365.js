function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new ArrayBuffer(3, { maxByteLength: 3725 });
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = v10;
    }
    const v15 = new F11();
    function f17(a18) {
        function f19(a20, a21, a22) {
            return a21;
        }
        const v25 = { type: "function" };
        v25.flushDenormals = v15;
        const v26 = new Worker(f19, v25);
        v26.postMessage(v25);
    }
    WeakMap[Symbol.toPrimitive] = f17;
    class C30 {
        [WeakMap] = -1000000000000.0;
    }
}
new F1();
