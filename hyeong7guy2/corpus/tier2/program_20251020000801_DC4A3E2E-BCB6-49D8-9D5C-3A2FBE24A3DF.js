function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { __proto__: null, 1073741824: this };
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v9 = new F0(F0, F0);
class C10 {
    static [v9](a12, a13, a14) {
    }
}
