function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const v9 = new BigUint64Array(v7);
                v9.toSorted();
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
