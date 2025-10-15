function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 0;
            while ((() => {
                    const v9 = v7 < 5;
                    v9 && v9;
                    return v9;
                })()) {
                v7++;
            }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            eval(a6);
        }
        f5(this);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0(F0, F0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
