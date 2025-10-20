function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                ("p").link(a2, "p", f7);
                for (let v10 = 0; v10 < 5; v10++) {
                    function f11(a12, a13) {
                        return a13;
                    }
                }
                return a3;
            }
            const v14 = f7();
            v14 + v14;
            return a6;
        }
        f5.call();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
const t25 = v18.toString;
t25();
