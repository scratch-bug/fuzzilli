const v1 = Symbol.iterator;
const v2 = class {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            const v13 = { type: "🙌🏿", e: a7 };
            const t9 = JSON.stringify;
            t9(v13);
            for (let i19 = 0, i20 = 10; i20; i20--) {
            }
            function f26(a27) {
                return a27;
            }
            return f26;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v28 = new F8();
    class C29 {
        static [v28](a31, a32, a33) {
        }
    }
}
const v34 = new F4("🙌🏿", "🙌🏿");
const t27 = v34.constructor;
new t27(v2, v1);
