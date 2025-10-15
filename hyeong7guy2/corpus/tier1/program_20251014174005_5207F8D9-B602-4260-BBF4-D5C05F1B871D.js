function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = {
                a: 1.1,
                set e(a9) {
                },
            };
            for (let v11 = 0; v11 < 5; v11++) {
                const v12 = v10.a;
                v12 >>> v12;
            }
            return a2;
        }
        f5();
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
