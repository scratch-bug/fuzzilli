const v1 = new Date();
const v2 = v1.toLocaleString();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            return v2;
        }
        Date.parse(v2);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v11 = new F3();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
