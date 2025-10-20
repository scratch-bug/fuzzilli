const v1 = Symbol.iterator;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    const v18 = {
                        [v1]() {
                        },
                        a: a14,
                    };
                    const t14 = JSON.stringify;
                    t14(v18);
                    for (let i24 = 0, i25 = 10; i25; i25--) {
                    }
                    function f31(a32) {
                    }
                    return f31;
                }
                Object.defineProperty(this, "toString", { get: f16 });
            }
            const v33 = new F12(a10);
            class C34 {
                static [v33](a36, a37, a38) {
                }
            }
        }
        const v39 = new F8(a6, Symbol);
        const t31 = v39.constructor;
        new t31(v39);
        return Date;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v42 = new F3();
class C43 {
    static [v42](a45, a46, a47) {
    }
}
