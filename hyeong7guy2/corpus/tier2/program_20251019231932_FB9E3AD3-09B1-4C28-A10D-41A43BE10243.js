const v1 = Symbol.iterator;
function f2() {
    return f2;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            const v14 = {
                maxByteLength: 4096,
                [v1]() {
                },
            };
            v14.toZonedDateTimeISO = f2;
            const t15 = JSON.stringify;
            t15(v14);
            for (let i20 = 0, i21 = 10; i21; i21--) {
            }
            function f27(a28) {
                return a28;
            }
            return f27;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v29 = new F8();
    class C30 {
        static [v29](a32, a33, a34) {
        }
        static [v29](a36, a37, a38) {
        }
    }
}
new F3(v1, v1);
