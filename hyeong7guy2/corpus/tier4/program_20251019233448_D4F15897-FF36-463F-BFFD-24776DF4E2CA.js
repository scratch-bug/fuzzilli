function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9) {
            const v10 = `
                try {
                } catch(e11) {
                } finally {
                }
            `;
            return `E${v10}XQd`;
        }
        f8.call();
        return F0;
    }
    f4(f4, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v15 = new F0();
new F0();
new F0(v15, v15);
