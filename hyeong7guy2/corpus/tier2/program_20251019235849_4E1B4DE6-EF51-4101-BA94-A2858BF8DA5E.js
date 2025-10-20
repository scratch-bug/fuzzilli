function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            v11.e = v11;
            let v12 = 30349n;
            const v13 = v12--;
            v13 % v13;
            const v15 = (a16, a17, a18) => {
                return a18;
            };
            const v20 = eval(a2);
            v20 ?? v20;
            return a6;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0(F0, F0);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
