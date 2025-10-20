function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = new SharedArrayBuffer(4096);
            const v11 = new Uint32Array(v9);
            v11.reverse();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
