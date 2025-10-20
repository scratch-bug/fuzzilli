function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { a: 1.1 };
            const v9 = [-2147483648];
            for (let v10 = 0; v10 < 5; v10++) {
                (v10 >>> v10) >= v9;
            }
            f5 - v8;
            return a3;
        }
        f5.apply();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
