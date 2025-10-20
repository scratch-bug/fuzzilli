function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a2;
            }
            function f15(a16) {
                return f15;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v17 = new F8(F0, a7, this, F0);
        try { v17.e(f4, a7, F0, v17); } catch (e) {}
        return a5;
    }
    f4(F0, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0();
const v21 = new F0(F0, v20);
const t22 = v21.constructor;
new t22(F0);
for (let i25 = 10, i26 = 10; i26; i26--) {
}
