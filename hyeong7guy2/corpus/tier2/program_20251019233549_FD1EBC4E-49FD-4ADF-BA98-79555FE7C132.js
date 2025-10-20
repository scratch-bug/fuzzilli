function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new ArrayBuffer(165, { maxByteLength: 1024 });
    const v12 = new Uint16Array(v10);
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        function f17() {
            function f18(a19) {
                v12.includes(f18);
            }
            return f18;
        }
        Object.defineProperty(this, "toString", { get: f17 });
    }
    const v21 = new F13();
    class C22 {
        static [v21](a24, a25, a26) {
        }
    }
}
new F0();
