function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = [1000000000000.0,0.9718499871827192,Infinity,-1000000.0,-1000000000.0,706699.1507101269,-1000.0,-1000000000.0,0.3050939298634756];
            function f10(a11) {
                v9.includes(a11, -1082547511);
                return f6;
            }
            const t9 = ("2147483647").constructor;
            f10(t9(Symbol));
        }
        f6(a3);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1(F1, F1);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
