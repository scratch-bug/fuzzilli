const v1 = { maxByteLength: 1000 };
v1.c = v1;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        const v8 = { maxByteLength: 4096 };
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
const v23 = new F3();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
