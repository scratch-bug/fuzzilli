function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Uint32Array();
            const v9 = v8.length;
            -v9;
            ("frZom").normalize();
            let v13 = v9 / v9;
            const v14 = new Uint32Array();
            for (let i17 = 0, i18 = 10;
                i18;
                (() => {
                    i18--;
                    function F22(a24, a25) {
                        if (!new.target) { throw 'must be called with new'; }
                        v14.indexOf(v8, i17);
                    }
                    class C27 {
                        static [F22](a29, a30, a31) {
                        }
                    }
                })()) {
            }
            v13--;
            return a3;
        }
        f5.apply(f5, F0, a3, f4);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v37 = new F0();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
