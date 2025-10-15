const v1 = [47334,13];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return a8;
            }
            function f19(a20) {
                for (let i = 0; i < 5; i++) {
                    `h${Symbol}string${Date}object${v1}-128`;
                }
                return a4;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        return Date;
    }
    f6(a5, a4, f6);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2(v1, v1);
new F2();
