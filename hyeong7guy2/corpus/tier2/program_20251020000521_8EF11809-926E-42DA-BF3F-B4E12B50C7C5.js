const v2 = Array(2);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            JSON.stringify(JSON, v2);
        }
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v12 = new F3(v2, F3);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
