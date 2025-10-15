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
            v12--;
            const v14 = (a15, a16, a17) => {
                return a2;
            };
            const v19 = eval();
            const v20 = v19 ?? v19;
            v20 ?? v20;
            return v12;
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
