const v1 = (129).constructor;
const v2 = new v1(v1);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        const v8 = { a: a5 };
        const t6 = JSON.stringify;
        t6(v8);
        for (let i14 = 0, i15 = 10; i15; i15--) {
        }
        function f21(a22) {
            return a22;
        }
        return f21;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v23 = new F3(v2);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
