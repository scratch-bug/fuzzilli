function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        const v11 = new ArrayBuffer(6, { maxByteLength: 6 });
        const v13 = new Int32Array(v11);
        v13.reverse();
    }
    this[Symbol.toPrimitive] = f4;
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
