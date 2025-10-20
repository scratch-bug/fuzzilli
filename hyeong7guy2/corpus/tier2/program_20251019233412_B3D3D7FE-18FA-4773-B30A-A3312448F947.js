function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i9 = 0, i10 = 10;
                i10;
                (() => {
                    i10--;
                    for (let i15 = 0; i15 < 20000; i15++) {
                        i15 % Math.abs(i15);
                    }
                })()) {
            }
            return a6;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0(F0, F0);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
