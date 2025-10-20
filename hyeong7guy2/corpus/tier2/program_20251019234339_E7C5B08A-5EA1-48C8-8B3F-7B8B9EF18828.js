function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            const v11 = { type: "🙌🏿", e: a5 };
            const t6 = JSON.stringify;
            t6(v11);
            for (let i17 = 0, i18 = 10; i18; i18--) {
            }
            function f24(a25) {
            }
            return f24;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v26 = new F6(a4, F6);
    class C27 {
        static [v26](a29, a30, a31) {
        }
    }
}
const v32 = new F2();
const t23 = v32.constructor;
new t23(Float32Array, F2);
