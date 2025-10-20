function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v11 = new SharedArrayBuffer(4096);
            const v13 = new Uint32Array(v11);
            v13.copyWithin("toUpperCase", 62);
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
