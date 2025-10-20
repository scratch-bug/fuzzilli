function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 0;
            const v8 = v7 >>> v7;
            v8 & v8;
            v7--;
            const v11 = v7 >>> v7;
            v11 >>> v11;
            let v13 = 64;
            const v14 = v13 * v13;
            v14 >>> v14;
            v13 >>> v13;
            v13--;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
    static [v18](a25, a26, a27) {
    }
}
