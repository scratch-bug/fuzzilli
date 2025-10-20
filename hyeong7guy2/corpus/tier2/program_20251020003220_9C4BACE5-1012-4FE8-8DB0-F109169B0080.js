function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Int16Array();
            const v10 = v9.length;
            const v11 = { millisecond: v10 };
            const v12 = {};
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1();
v15.toString();
