function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[4] | 7;
            const v12 = { a: 1.1 };
            for (let v13 = 0; v13 < 5; v13++) {
                class C14 {
                    static [v12](a16, a17) {
                    }
                }
                C14.call;
                Array(v10);
            }
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
v20.toString(Array, v20);
class C22 {
    static [v20](a24, a25, a26) {
    }
    static [v20](a28, a29, a30) {
    }
}
