function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8(this, a7);
            v12.constructor;
            let v14 = 10n;
            v14 >= v14;
            const v16 = v14--;
            const v17 = (a18, a19, a20) => {
                return a18;
            };
            const v22 = eval(a4, Symbol, v16);
            v22 >> v22;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v26 = new F1();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
