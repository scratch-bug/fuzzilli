function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            const v12 = this.a;
            const v14 = 9 << 9;
            v14 / v14;
            v12 | v11;
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
    static [v17](a28, a29, a30) {
    }
}
