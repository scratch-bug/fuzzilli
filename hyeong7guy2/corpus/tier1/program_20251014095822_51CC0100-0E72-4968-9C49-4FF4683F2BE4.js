function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                const v19 = Temporal.PlainTime;
                try { Temporal(); } catch (e) {}
                for (let v21 = 0; v21 < 5; v21++) {
                }
                return v19;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = 2147483647;
        }
        new F9(a6, this, F0, 2147483647);
        const v25 = [-11];
        function F26(a28, a29, a30, a31) {
            if (!new.target) { throw 'must be called with new'; }
            a30.g = a30;
            a31--;
            this.f = a31;
        }
        const v33 = new F26(Int8Array, 1825, F26, 1825);
        const t27 = v33.constructor;
        new t27(v33, v25, v33);
        new F26(v33, F26, v33);
        return 1825;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
