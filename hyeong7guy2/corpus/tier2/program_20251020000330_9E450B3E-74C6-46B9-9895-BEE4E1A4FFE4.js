function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                eval();
                this.e = "p";
            }
            const v14 = new F8();
            const v15 = v14.e;
            const v16 = {};
            v15 == v15;
            return a4;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
for (let i28 = 0, i29 = 10; i29; i29--) {
}
