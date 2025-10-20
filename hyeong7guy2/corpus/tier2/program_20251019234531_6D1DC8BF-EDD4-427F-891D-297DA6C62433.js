function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f10() {
                ("p").link(a5, "p", f10);
                for (let v13 = 0; v13 < 5; v13++) {
                    function f14(a15, a16) {
                        return a9;
                    }
                }
                return a9;
            }
            const v17 = f10();
            v17 >> v17;
            const v19 = `string${536870912n}undefined`;
            const v20 = {};
            const v21 = v20 >= -783763.371444434;
            v21 ? v20 : -783763.371444434;
            v19[v19];
            return v21;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v26 = new F3();
v26.toString();
