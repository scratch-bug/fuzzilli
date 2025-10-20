function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            return 2;
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v9 = new F2();
const v10 = v9.constructor;
const v11 = new v10(9007199254740990n, 2, v10, F2);
(9007199254740990n).toString(v11);
