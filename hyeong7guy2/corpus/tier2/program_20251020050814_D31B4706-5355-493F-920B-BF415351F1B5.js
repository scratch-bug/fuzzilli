function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6) {
        function f7(a8, a9) {
            function f10(a11, a12, a13) {
                return a11.arguments;
            }
            f10(f10, 128, a9, a8);
            return this;
        }
        new Promise(f7);
        return F0;
    }
    f3();
    %OptimizeFunctionOnNextCall(f3);
}
const v19 = new F0();
const v20 = new F0();
new F0();
const v23 = WebAssembly.compile(v20, v19);
function f24() {
    return f24;
}
v23.catch(f24);
