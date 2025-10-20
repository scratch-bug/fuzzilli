function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 26970n;
            v7 **= v7;
            return v7;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v8 = new F0(F0, F0);
class C9 {
    static [v8](a11, a12, a13) {
    }
}
