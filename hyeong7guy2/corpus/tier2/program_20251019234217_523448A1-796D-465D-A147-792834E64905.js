function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { a: 1.1 };
            for (let v9 = 0; v9 < 5; v9++) {
                v9 >>> v9;
                Math.abs(4096);
            }
            f5 - v8;
            return a2;
        }
        f5.apply(f5, f5, f4);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
