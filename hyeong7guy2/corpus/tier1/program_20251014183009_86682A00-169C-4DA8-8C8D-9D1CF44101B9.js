const v2 = [47334,13];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        try { a10(); } catch (e) {}
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f19() {
            }
            function f20(a21) {
                for (let i = 0; i < 5; i++) {
                    `h${Symbol}string${Date}object${v2}-128`;
                }
            }
            Object.defineProperty(this, "e", { get: f19, set: f20 });
            this.e = -1;
        }
        new F13();
    }
    f7(a6, a5, f7);
    %OptimizeFunctionOnNextCall(f7);
}
new F3();
new F3();
new F3();
