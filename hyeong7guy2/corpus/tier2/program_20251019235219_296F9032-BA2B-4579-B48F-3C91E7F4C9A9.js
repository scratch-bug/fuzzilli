class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        a6 ?? a6;
        with (d8) {
            try { test.setFlushDenormals(test, test); } catch (e) {}
            const v14 = test.FastCAPI;
            try { v14.constructor(a7); } catch (e) {}
            const v16 = new v14(test, d8, d8, test);
            try { v16.add_all_uint32_typed_array(a7); } catch (e) {}
            v16.enforce_range_compare_i32("b", v14);
        }
        for (let v19 = 0; v19 < 5; v19++) {
        }
        function F20(a22) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.constructor(); } catch (e) {}
        }
        new F20(F20.length);
        const v26 = [-28740];
        class C27 {
            get a() {
                return v26;
            }
        }
        C0.g = C27;
        const v29 = new C27();
        function F30(a32, a33, a34, a35) {
            if (!new.target) { throw 'must be called with new'; }
            this(F30);
            this.e = C27;
            this.h = v29;
        }
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
    new Int8Array(1065172329);
}
const v41 = new F1();
const v42 = v41.constructor;
new v42(v41, v42, v42, F1, C0);
new F1();
