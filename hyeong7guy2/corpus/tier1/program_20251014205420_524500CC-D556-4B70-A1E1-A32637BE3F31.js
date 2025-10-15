function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            return Array.prototype.pop.call(2035);
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
