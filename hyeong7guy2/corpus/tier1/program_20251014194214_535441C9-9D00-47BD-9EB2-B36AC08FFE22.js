class C1 extends WeakSet {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
    }
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        a11[0] = C1;
        a12[2] = F9;
        Object.defineProperty(a12, 1, { configurable: true, enumerable: true, value: C7 });
        this.e = a11;
    }
    const v14 = new F9(Uint32Array, Uint32Array);
    const v15 = v14.e;
    const v16 = { ...v15 };
}
new F2(WeakSet, F2, WeakSet);
