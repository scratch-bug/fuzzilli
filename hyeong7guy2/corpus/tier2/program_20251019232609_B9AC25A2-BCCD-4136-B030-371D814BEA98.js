const v1 = Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        const v8 = {
            [v1]() {
            },
            a: a4,
        };
        const t9 = JSON.stringify;
        t9(v8);
        for (let i14 = 0, i15 = 10; i15; i15--) {
        }
        function f21(a22) {
        }
        return f21;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v23 = new F2(v1);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
class C29 {
    static [v23](a31, a32, a33) {
    }
}
