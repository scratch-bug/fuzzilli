function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a11;
            }
            function f16(a17) {
                const v18 = [0.39346707945810944,-991803.8963643727];
                v18[15] = 256;
                try {
                    v18.find(f5);
                } catch(e20) {
                }
                return a8;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = a4;
        }
        new F9();
        return F1;
    }
    f5();
}
new F1(F1, F1);
const v24 = new F1();
const t27 = v24.constructor;
new t27();
