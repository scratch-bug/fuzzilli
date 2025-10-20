class C0 {
}
const v3 = {};
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            let v11 = -1098098658;
            v11++;
            const v13 = { 3757: Symbol };
            v13[3757] = v13;
            const v15 = eval.apply;
            try { v15(eval, C0); } catch (e) {}
            const t13 = "NFD";
            t13[v3] ^= 1024;
            eval(a10);
            return 1024;
        }
        f9(f9(f8));
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v21 = new F4();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
