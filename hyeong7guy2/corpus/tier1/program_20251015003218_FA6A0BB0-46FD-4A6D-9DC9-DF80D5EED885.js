function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            eval();
            for (let i10 = 0; i10 < 20000; i10++) {
                i10 / 2;
                Math.random();
                i10++;
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
