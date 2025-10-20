const v0 = class {
    o(a2) {
        function f3(a4, a5) {
            while (9) {
            }
        }
        new Worker(f3, { type: "function" });
    }
}
const v11 = new v0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16() {
        function f17(a18) {
            v11.o();
        }
        f17();
        f17();
        return f17;
    }
    Object.defineProperty(this, "toString", { get: f16 });
}
const v22 = new F12();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
function F28() {
    if (!new.target) { throw 'must be called with new'; }
}
new F28();
