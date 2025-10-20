function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v8 = 0; v8 < 5; v8++) {
                WeakMap[8] = 2;
                function f10() {
                    return this;
                }
                WeakMap = [f10];
            }
            const v13 = (3)[4];
            v13 >>> v13;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
    static [v15](a22, a23, a24) {
    }
}
