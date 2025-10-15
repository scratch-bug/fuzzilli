const v2 = {};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            let v10 = -1098098658;
            let v11 = v10++;
            const v12 = { 3757: Symbol };
            v11--;
            const t7 = "NFD";
            t7[v2] ^= 1024;
            return eval(a5);
        }
        f8(f8);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v19 = new F3();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
