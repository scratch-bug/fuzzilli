function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new SharedArrayBuffer(3);
    const v9 = new Uint8Array(v8);
    class C10 extends Float32Array {
        constructor(a12, a13) {
            super(v9);
        }
    }
    new C10();
}
new F1(Float32Array, Float32Array);
