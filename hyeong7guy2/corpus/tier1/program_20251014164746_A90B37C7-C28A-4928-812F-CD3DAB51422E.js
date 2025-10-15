const v1 = [4096,4294967295,-26412,-4];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = v1[1];
            const v10 = v1[2];
            v10 >> v10;
            Float64Array >>> v1;
            -v9;
        }
        f7(f7());
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v16 = new F2(F2, F2);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
