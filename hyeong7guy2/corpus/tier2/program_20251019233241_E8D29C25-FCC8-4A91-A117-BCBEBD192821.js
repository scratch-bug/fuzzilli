function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = async (a5, a6) => {
        return this;
    };
    function f7() {
        function f8(a9) {
            v4.prototype;
        }
        f8(a2);
        f8(f8);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v13 = new F0(F0, F0);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
