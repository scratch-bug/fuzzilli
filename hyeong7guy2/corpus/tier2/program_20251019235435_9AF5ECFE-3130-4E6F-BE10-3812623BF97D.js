class C1 {
}
C1.g = 129;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        d8.Probe = C1;
        d8.d8 = this;
        with (d8) {
            const v13 = test.FastCAPI;
            const v14 = new v13(test, d8, d8, test);
            for (let v15 = 0; v15 < 5; v15++) {
            }
            v14.enforce_range_compare_i32("b", v13);
        }
        for (let v17 = 0; v17 < 5; v17++) {
        }
        function F18(a20) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F18(F2);
        function F22(a24, a25) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f26() {
            return F22;
        }
        const v27 = [-28740];
        class C28 {
            toString(a30) {
            }
            get a() {
                return v27;
            }
        }
        C1.g = C28;
        const v32 = new C28();
        function F33(a35, a36, a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = C28;
            this.h = v32;
        }
        try { F33.apply(); } catch (e) {}
        new F33();
        return C28;
    }
    f6(a5, a4, F2);
    %OptimizeFunctionOnNextCall(f6);
    new Int8Array(1065172329);
}
const v45 = new F2();
new F2(v45, 129);
new F2();
