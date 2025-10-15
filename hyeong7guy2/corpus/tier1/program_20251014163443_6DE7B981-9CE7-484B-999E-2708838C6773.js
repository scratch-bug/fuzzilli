const v2 = [47334,13];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f19() {
            }
            function f20(a21) {
                for (let i = 0; i < 5; i++) {
                    `h${Symbol}string${Date}object${v2}-128`;
                }
            }
            try { f20(); } catch (e) {}
            Object.defineProperty(this, "e", { get: f19, set: f20 });
            this.e = -1;
        }
        new F13();
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v26 = new F3();
const t23 = v26.constructor;
new t23();
new F3();
new F3();
