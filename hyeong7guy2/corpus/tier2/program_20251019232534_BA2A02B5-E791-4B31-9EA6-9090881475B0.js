const v0 = [-65536,1073741824,512,12];
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Symbol.iterator;
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            const v15 = {
                [v5]: f11,
                arguments: v0,
                a: 4.0,
                type: "🙌🏿",
                o(a13, a14) {
                    return this;
                },
            };
            const t16 = JSON.stringify;
            t16(v15);
            for (let i21 = 0, i22 = 10; i22; i22--) {
            }
            function f28(a29) {
            }
            return f28;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v30 = new F7(Symbol, v5);
    class C31 {
        static [v30](a33, a34, a35) {
        }
    }
}
new F3();
new F3();
