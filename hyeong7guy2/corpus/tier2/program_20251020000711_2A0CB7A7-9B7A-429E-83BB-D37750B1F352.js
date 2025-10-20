function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                try { ("🙌🏿").reduce(f5, a2, F0, "🙌🏿", this); } catch (e) {}
                ("🙌🏿").codePointAt();
                return f5;
            }
            const v11 = { construct: f7 };
            v11.construct(a2, v11, v11, a6);
        }
        f5(f4);
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
