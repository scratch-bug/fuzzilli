function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            with (d8) {
                const t8 = test.FastCAPI;
                const v14 = new t8();
                try { v14.sum_uint64_as_bigint(F0, a10); } catch (e) {}
            }
            return a7;
        }
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v16 = new F4();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
