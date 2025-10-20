function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = new SharedArrayBuffer(4096);
            const v12 = new Uint32Array(v10);
            v12.copyWithin(15, 15);
            return a3;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
