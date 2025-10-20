function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 0;
            const v8 = v7 >>> v7;
            v8 ^ v8;
            v7--;
            v7 >>> v7;
            const v13 = 64 * 64;
            v13 >>> v13;
            const v15 = 64 >>> 64;
            return v15 >>> v15;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
}
