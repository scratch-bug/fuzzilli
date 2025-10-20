function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = new SharedArrayBuffer(4096);
            v9.slice();
            return a3;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
