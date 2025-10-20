[-4294967296,-5];
class C1 {
}
try { C1.apply(); } catch (e) {}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f10() {
                return ("🙌🏿")[0];
            }
            f10();
            ({ construct: f10 }).construct();
        }
        f8.call();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v18 = new F3();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
3 & 3;
