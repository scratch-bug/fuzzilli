function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                a10--;
                eval();
                this.e = a10;
            }
            const v14 = new F7();
            const v15 = v14.e;
            const v16 = v15 < v15;
            return v16 && v16;
        }
        f5();
        f5();
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
