const v1 = Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = Symbol.iterator;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            const v18 = {
                type: "🙌🏿",
                e: a11,
                [v6]() {
                },
            };
            const t16 = JSON.stringify;
            t16(v18);
            for (let i24 = 0, i25 = 10; i25; i25--) {
            }
            function f31(a32) {
            }
            return f31;
        }
        Object.defineProperty(this, "toString", { get: f16 });
    }
    const v33 = new F12();
    class C34 {
        static [v33](a36, a37, a38) {
        }
        static [v33](a40, a41, a42) {
        }
    }
}
new F8(F2, v1);
