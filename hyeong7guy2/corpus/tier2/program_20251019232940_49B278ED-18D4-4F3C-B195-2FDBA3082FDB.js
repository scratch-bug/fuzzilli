function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a6;
        }
        const v8 = {};
        const v9 = { 7: 22 };
        Object.preventExtensions(v9);
        Object.assign(v8, v9);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
