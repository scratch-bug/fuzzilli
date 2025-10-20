function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            for (let i9 = 0;
                i9 < 100000;
                (() => {
                    typeof f0;
                    try {
                    } catch(e14) {
                    } finally {
                    }
                    ++i9;
                })()) {
            }
            eval(a4);
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
