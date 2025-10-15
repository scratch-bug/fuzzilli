function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            Array.prototype;
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    const v11 = `
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v11);
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
