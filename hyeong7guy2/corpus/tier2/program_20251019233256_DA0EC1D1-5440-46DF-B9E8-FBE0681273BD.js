function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 0;
            v7 >>> v7;
            v7--;
            const v10 = v7 >>> v7;
            v10 >>> v10;
            let v12 = 64;
            const v13 = v12 * v12;
            v13 >>> v13;
            v12 >>> v12;
            v12--;
            return v10;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
}
