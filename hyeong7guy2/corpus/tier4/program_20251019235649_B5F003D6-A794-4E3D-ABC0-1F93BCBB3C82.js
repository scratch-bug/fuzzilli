function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9(a10) {
            return a7;
        }
        const v11 = class extends f9 {
            static ["name"](a13, a14, a15, a16) {
            }
        }
        v11.bind();
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v20 = new F0(F0, F0);
new F0(v20, v20);
