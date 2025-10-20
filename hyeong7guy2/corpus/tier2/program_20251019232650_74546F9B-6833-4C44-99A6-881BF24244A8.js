function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        for (let i7 = 0;
            (() => {
                const v9 = i7 != 10000;
                return v9 + v9;
            })();
            i7++) {
        }
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0();
v14.toString;
