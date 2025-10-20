const v1 = [1.0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v12 = Array.of(v1)[0].push(1);
            v12 << v12;
            return v12;
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v14 = new F2();
const v15 = new F2(v1, v14);
class C16 {
    static [v14](a18, a19, a20) {
    }
    static [v15](a22, a23, a24) {
    }
}
