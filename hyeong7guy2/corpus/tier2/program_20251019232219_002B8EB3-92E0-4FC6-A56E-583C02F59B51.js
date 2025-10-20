function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v8 = 0; v8 < 5; v8++) {
                const v11 = v8 ? { a: 1 } : Object;
                v11.toISOString = 1;
                v11.toISOString = v11;
            }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.d = f5;
            return a3;
        }
        f5(this);
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
