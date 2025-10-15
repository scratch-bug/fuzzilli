function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = Array.prototype;
            v8.copyWithin(...v8, f5, ...v8);
        }
        f5(f4);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    const v12 = `
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v12);
}
const v19 = new F0();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
