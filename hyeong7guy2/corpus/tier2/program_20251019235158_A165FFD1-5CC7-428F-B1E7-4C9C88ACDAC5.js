const v4 = [47334,13];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        a12(this, a8, Symbol);
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            function f21() {
            }
            function f22(a23) {
                for (let i = 0; i < 5; i++) {
                    `h${Symbol}string${Date}object${v4}-128`;
                }
                Object.defineProperty(Date, 2, { value: -38182n });
                return a12;
            }
            Object.defineProperty(this, "e", { get: f21, set: f22 });
            this.e = -1;
        }
        new F15();
    }
    f9(a8, a7, f9);
    %OptimizeFunctionOnNextCall(f9);
}
new F5();
new F5();
new F5(-38182n, v4);
