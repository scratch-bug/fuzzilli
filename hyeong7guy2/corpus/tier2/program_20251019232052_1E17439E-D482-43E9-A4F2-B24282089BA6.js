function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                const v9 = ("🙌🏿").constructor;
                const t6 = v9.fromCharCode(v9).constructor;
                new t6();
                return F0;
            }
            f7.call(f5, f5, f5, f5, F0);
            return a6;
        }
        f5(F0);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
