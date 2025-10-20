const v0 = [-3,4,12,-15,-22147];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a4(this); } catch (e) {}
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            const v12 = { type: "🙌🏿", e: v0 };
            const t8 = JSON.stringify;
            t8(v12);
            for (let i18 = 0, i19 = 10; i19; i19--) {
            }
            function f25(a26) {
                return a5;
            }
            return f25;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v27 = new F7(v0, "🙌🏿");
    class C28 {
        static [v27](a30, a31, a32) {
        }
    }
    v0.__proto__ = a4;
}
new F2(F2);
