function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = 2147483647 >>> F9.e;
            const v16 = {
                [Symbol]() {
                },
            };
            new Int16Array(this, v14);
        }
        f7(2147483647);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v20 = new F2();
class C21 {
    static [v20](a23, a24, a25) {
    }
    static [v20](a27, a28, a29) {
    }
}
