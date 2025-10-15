function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v16 = Promise.prototype.finally;
            try { v16.call(); } catch (e) {}
        }
        new F8(a5, F8, a5, a7);
        return this;
    }
    f4(a3, f4, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0();
new F0(F0, v20);
new F0();
