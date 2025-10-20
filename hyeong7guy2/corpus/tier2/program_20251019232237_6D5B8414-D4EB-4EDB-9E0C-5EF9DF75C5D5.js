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
            const v13 = v7 + v7;
            v13 - v13;
            const v16 = eval(v12);
            v16 ^ v16;
            return v16;
        }
        f5();
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0(F0, F0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
