const v1 = Symbol.iterator;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            const v13 = {
                type: "🙌🏿",
                e: a6,
                [v1]() {
                },
            };
            const t12 = JSON.stringify;
            t12(v13);
            for (let i19 = 0, i20 = 10; i20; i20--) {
            }
            function f26(a27) {
            }
            return f26;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v28 = new F7();
    class C29 {
        static [v28](a31, a32, a33) {
        }
        static [v28](a35, a36, a37) {
        }
    }
}
new F3();
