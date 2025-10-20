function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                this.e = a12;
            }
            const v14 = new F9("2147483647", -3612);
            const v15 = v14.e;
            v15 - v15;
            new F9();
            function f19() {
                return this;
            }
            let v20 = -10780;
            const v21 = v20 !== v20;
            v21 && v21;
            const v24 = 0 << 0;
            v20 **= 0;
            const v25 = eval(a2);
            const v26 = v25 ?? v25;
            v26 ?? v26;
            function f28(a29, a30) {
                return a29;
            }
            f28(v24);
        }
        f5(f5(f5));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v34 = new F0();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
