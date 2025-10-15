function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            gc();
            const v11 = {
                next() {
                    const v10 = { ...this };
                    return this;
                },
            };
            v11.next();
        }
        f5(a3);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
