function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a7;
            }
            function f15(a16) {
                const v18 = new Set();
                return [typeof v18 === "object"];
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v23 = new F8();
        v23.e = v23;
        return F0;
    }
    f4(F0, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0(F0, F0);
const v26 = v25.constructor;
const v27 = new v26(v25, F0, F0);
new F0(v27, v26);
for (let i31 = 0, i32 = 10; i32; i32--) {
}
