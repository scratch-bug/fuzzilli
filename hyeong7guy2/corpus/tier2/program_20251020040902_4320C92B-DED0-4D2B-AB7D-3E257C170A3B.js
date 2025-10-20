[1,3,-16,7,4096,1073741823,48960];
[];
const v7 = new BigInt64Array();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12(a13, a14, a15) {
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            function f23(a24) {
                for (let i = 0; i < 5; i++) {
                }
            }
            f23();
            f23(a14);
            Object.defineProperty(this, "e", { get: a19, set: f23 });
        }
        try { new F17(v7); } catch (e) {}
        const v28 = new F17();
        v28.e = v28;
    }
    f12();
    %OptimizeFunctionOnNextCall(f12);
}
const v30 = new F8(F8);
const t24 = v30.constructor;
const v32 = new t24();
typeof 0 === "symbol";
const t26 = v32.constructor;
new t26();
