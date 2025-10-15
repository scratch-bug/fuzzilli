function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f11() {
                ("p").codePointAt(F0);
                return a6;
            }
            f11(129);
            const v15 = eval(a6);
            v15 | v15;
            return a6;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v19 = new F3(F3, 129);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
