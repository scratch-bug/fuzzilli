function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            const v14 = {
                done: a7,
                [a6](a10, a11, a12, a13) {
                },
            };
            const t10 = JSON.stringify;
            t10(v14);
            for (let i20 = 0, i21 = 10; i21; i21--) {
            }
            function f27(a28) {
            }
            return f27;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v29 = new F4(F4);
    class C30 {
        static [v29](a32, a33, a34) {
        }
    }
}
const v35 = new F0();
new F0(v35, v35);
