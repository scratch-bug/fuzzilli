const v0 = [268435441,2051];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = 0;
            const v9 = v8 >>> v8;
            const v10 = v8--;
            const v11 = v8 >>> v8;
            const v12 = v11 >>> v11;
            let v13 = 64;
            const v14 = v13 * v13;
            const v15 = v14 >>> v14;
            v15 ^ v15;
            const v17 = v13 >>> v13;
            try { a3(v0, "-03:00", f6, "-03:00", v9); } catch (e) {}
            function f20(a21) {
                return v12;
            }
            v17 >>> v17;
            v13--;
            return v10;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1();
class C25 {
    static [v24](a27, a28, a29) {
    }
    static [v24](a31, a32, a33) {
    }
}
