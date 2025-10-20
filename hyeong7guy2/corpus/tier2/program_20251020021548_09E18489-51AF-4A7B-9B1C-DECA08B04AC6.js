function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i8 = 0;
                (() => {
                    let v10 = i8 < 100000;
                    v10 *= v10;
                    return v10;
                })();
                ++i8) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
