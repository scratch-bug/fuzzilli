const v2 = new Float32Array(1895);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            with (d8) {
                const t6 = test.FastCAPI;
                const v13 = new t6();
                v13.add_all_uint64_typed_array(v2);
            }
        }
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v15 = new F3(Float32Array, F3);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
