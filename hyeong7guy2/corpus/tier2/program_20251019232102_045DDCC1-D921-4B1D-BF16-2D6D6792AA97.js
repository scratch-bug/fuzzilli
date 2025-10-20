const v1 = new Date();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1.setMinutes(-2147483647);
            return v1;
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v11 = new F2(F2, v1);
v11.toString();
