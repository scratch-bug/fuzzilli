function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            a3[4] | 7;
            const v11 = { a: 1.1 };
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.prototype = F12;
            this.a - v11;
        }
        f5();
        f5(a2);
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
