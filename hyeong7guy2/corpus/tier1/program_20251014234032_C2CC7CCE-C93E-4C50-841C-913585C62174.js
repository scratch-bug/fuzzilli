function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                const v9 = ("🙌🏿").fontsize();
                v9.codePointAt(v9);
                return f7;
            }
            const v11 = { construct: f7 };
            v11.construct(f5, f7, f5, f7, v11);
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
