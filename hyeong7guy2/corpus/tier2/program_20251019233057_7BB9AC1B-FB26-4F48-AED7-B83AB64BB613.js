function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[512] | 7;
            const v12 = { d: -108.5854186801289 };
            for (let v13 = 0; v13 < 5; v13++) {
                class C14 {
                    static [v12](a16, a17) {
                    }
                }
                Array(v10, C14.call);
            }
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1(F1, F1);
v20.toString(F1, Array, v20, Array, F1);
class C22 {
    static [v20](a24, a25, a26) {
    }
    static [v20](a28, a29, a30) {
    }
}
