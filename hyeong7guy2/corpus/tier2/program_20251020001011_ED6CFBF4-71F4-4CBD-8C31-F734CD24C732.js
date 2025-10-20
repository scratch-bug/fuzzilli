function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Uint32Array(this);
            v9.fill();
            v9.length / 133;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
F1.prototype = F1;
const v15 = new F1();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
