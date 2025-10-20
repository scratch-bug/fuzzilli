const v0 = [0.15938843583110962];
const v2 = Symbol.iterator;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            const v14 = {
                type: "🙌🏿",
                e: a7,
                [v2]() {
                },
            };
            const t13 = JSON.stringify;
            t13(v14);
            for (let i20 = 0, i21 = 10; i21; i21--) {
            }
            function f27(a28) {
                return a28;
            }
            return f27;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v29 = new F8(a7, this);
    class C30 {
        static [v29](a32, a33, a34) {
        }
    }
}
const v35 = new F4();
const t31 = v35.constructor;
new t31(v0, v35);
