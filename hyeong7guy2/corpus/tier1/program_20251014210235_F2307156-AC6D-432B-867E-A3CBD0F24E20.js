const v1 = {};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            let v9 = -1098098658;
            let v10 = v9++;
            const v11 = v10--;
            const t7 = "NFD";
            t7[v1] ^= 1024;
            eval();
            return v11;
        }
        f7(f7());
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
