function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                this.e = a12;
            }
            const v14 = new F9(a4, f6);
            const v15 = v14.e;
            const v16 = v15 < v15;
            v16 && v16;
            const v20 = {
                [Symbol]() {
                    "getTimeZoneTransition" < v15;
                },
            };
        }
        f7(f7);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v23 = new F2("getTimeZoneTransition", "getTimeZoneTransition");
class C24 {
    static [v23](a26, a27, a28) {
    }
}
