class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        d8.Probe = C0;
        d8.d8 = this;
        with (d8) {
            const v12 = test.FastCAPI;
            const v13 = new v12(test, d8, d8, test);
            for (let v14 = 0; v14 < 5; v14++) {
            }
            v13.enforce_range_compare_i32("b", v12);
        }
        function F16(a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v24 = new F20();
        return F16;
        const v25 = [-28740];
        class C26 {
            get a() {
                return v25;
            }
        }
        const v28 = C26();
        function F29(a31, a32, a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = C26;
            this.h = v28;
        }
        return v24;
    }
    f5(F1, F1, f5);
    %OptimizeFunctionOnNextCall(f5);
    new Int8Array(1065172329);
}
new F1();
new F1(C0, C0);
new F1(F1, F1);
