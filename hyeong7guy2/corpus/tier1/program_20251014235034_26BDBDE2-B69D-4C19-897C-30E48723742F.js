function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a10;
            }
            const v11 = new F7();
            const v12 = v11.e;
            v12 >> v12;
            const v16 = 0 << 0;
            eval(a3);
            function f18(a19, a20) {
                return a19 * a19;
            }
            f18(v16);
        }
        f5(f5);
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
