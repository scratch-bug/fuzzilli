function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8();
            const v13 = v12.constructor;
            for (const v15 in Uint8Array) {
                for (let [v16,v17,v18] of 512) {
                }
            }
            v13.d = v13;
        }
        f6(F1);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1(F1, 512);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
