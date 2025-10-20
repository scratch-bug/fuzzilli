function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            let v8 = -v7;
            v8--;
            const v10 = v7 | v7;
            v10 >> v10;
            const v12 = v7--;
            let v13 = v7 + v7;
            const v14 = v13--;
            eval(v12);
            return v14;
        }
        f5(f5);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
