function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        const v11 = new ArrayBuffer(1468, { maxByteLength: 2615505747 });
        const v13 = new Float64Array(v11);
        v13.fill();
        return ArrayBuffer;
    }
    const v15 = { construct: f7 };
    v15.construct(1468, a6, a6, f7, v15);
}
new F1(F1, F1, 1468, F1);
