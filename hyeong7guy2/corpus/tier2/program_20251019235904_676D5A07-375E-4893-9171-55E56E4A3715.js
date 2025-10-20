function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { maxByteLength: 65537 };
            const v10 = { type: "🙌🏿", arguments: v8 };
            const t6 = JSON.stringify;
            t6(v10);
            return a3;
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
