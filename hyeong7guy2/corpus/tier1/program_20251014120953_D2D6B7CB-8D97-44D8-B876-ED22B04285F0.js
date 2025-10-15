function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            const v12 = v11.constructor;
            new v12(v12, F0, F0);
            v11.e = v11;
            v11.e = v11;
            let v14 = 30349n;
            const v15 = v14--;
            v15 ^ v15;
            const v17 = (a18, a19, a20) => {
                return F0;
            };
            eval();
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0();
v25.toString();
class C27 {
    static [v25](a29, a30, a31) {
    }
}
