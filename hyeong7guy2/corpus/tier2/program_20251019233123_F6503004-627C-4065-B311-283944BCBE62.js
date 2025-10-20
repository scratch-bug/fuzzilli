function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            with (d8) {
                const v9 = test.FastCAPI;
                const v10 = new v9(a3, F0, test);
                v10.enforce_range_compare_u32(v9);
                try { v10.add_all_uint64_typed_array(); } catch (e) {}
            }
        }
        f5(a2);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
