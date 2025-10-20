function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[512] >>> 7;
            for (let v11 = 0; v11 < 5; v11++) {
                class C12 {
                }
                const v13 = C12.call;
                let v14 = [a3,a3];
                function f15() {
                    v14++;
                    return v14;
                }
                Array(v10, v13);
            }
            return a4;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1();
class C19 {
    static [v18](a21, a22, a23) {
    }
    static [v18](a25, a26, a27) {
    }
}
