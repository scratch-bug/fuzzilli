function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let [i12, i13] = (() => {
                    let v8 = 10;
                    v8--;
                    const v10 = v8 >>> v8;
                    v10 < v10;
                    return [0, v8];
                })();
                i13;
                i13--) {
            }
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
